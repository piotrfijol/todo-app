import { describe, test, expect, beforeEach, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import TasksView from "@/views/TasksView.vue";

import { initVuetify, DOMCleanUp } from '@/__tests__/setup';

describe("TasksView", () => {
    
    let wrapper;
    let vuetify;
    
    beforeEach(() => {
        vuetify = initVuetify();
        wrapper = mount(TasksView, {
            global: {
                plugins: [vuetify]
            }
        });
        wrapper.vm.tasks = [{id: 1, title: '', description: '', isDone: false}]
    });
    
    afterEach(() => {
        DOMCleanUp();
    });


    test("removes the task", () => {
        expect(wrapper.vm.tasks.length).toBe(1);
        wrapper.vm.deleteTask({}, 1)
        expect(wrapper.vm.tasks.length).toBe(0);
    });

    test("toggles task's 'isDone' status", () => {

        expect(wrapper.vm.tasks[0].isDone).toBe(false);
        wrapper.vm.toggleTaskStatus({}, 1)
        expect(wrapper.vm.tasks[0].isDone).toBe(true);
    });

    test("renders tasks kept in localStorage", async () => {
        DOMCleanUp();

        const data = {
            tasks: [
                {
                    id: 0,
                    title: 'Task 0',
                    description: 'description of task 0',
                    isDone: false
                },
                {
                    id: 1,
                    title: 'Task 1',
                    description: 'description of task 1',
                    isDone: false
                },
            ],
            idCounter: 2
        }
        const myLocalStorage = {
            getItem() { return JSON.stringify(data)}
        }

        global.localStorage = myLocalStorage;
        
        wrapper = mount(TasksView, {
            attachTo: document.body,
            global: {
                plugins: [vuetify]
            }
            
        });

        await wrapper.vm.$forceUpdate();
        expect(Array.from(document.body.querySelectorAll('.task')).length).toBe(2);
        
        
    });
});