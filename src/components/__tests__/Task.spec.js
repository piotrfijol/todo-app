import { describe, test, expect, beforeEach, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

import { initVuetify, DOMCleanUp } from '@/__tests__/setup';


describe("Task", () => {
    let vuetify;
    let wrapper;

    beforeEach(() => {
        vuetify = initVuetify();
        wrapper = mount(Task, {
            props: {
                task: {
                    id: 1,
                    title: 'The title of the task',
                    description: 'task\'s description',
                    isDone: false
                }
            },
            global: {
                plugins: [vuetify]
            }
        });
    });

    afterEach(() => {
        DOMCleanUp();
    });
    
    test("renders", () => {
        expect(wrapper).not.toBe(undefined);
    });

    test("emits delete event", () => {
        wrapper.find('.delete-btn').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('delete');
    });

    test("emits toggle event", () => {
        wrapper.find('.toggle-btn').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('toggle');
    });


});