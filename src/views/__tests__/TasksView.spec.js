import { describe, test, expect, beforeEach, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import TasksView from "@/views/TasksView.vue";

import { initVuetify } from '@/__tests__/setup';

describe("TasksView", () => {
    
    let wrapper;
    
    beforeEach(() => {
        let vuetify = initVuetify();
        wrapper = mount(TasksView, {
            global: {
                plugins: [vuetify]
            }
        });
    });
    
    afterEach(() => {
        // DOM clean up
        document.body.innerHTML = '';
        document.body.replaceWith(document.createElement('body'));
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
});