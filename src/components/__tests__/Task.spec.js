import { describe, test, expect, beforeEach, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

import { initVuetify } from './setup';


describe("Task", () => {
    let vuetify;
    let wrapper;

    beforeEach(() => {
        vuetify = initVuetify();
        wrapper = mount(Task, {
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
    
    test("renders", () => {
        expect(wrapper).not.toBe(undefined);
    });

    test("emits delete event", () => {
        wrapper.find('.delete-btn').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('delete');
    });

    test("emits toggle event", () => {
        wrapper.find('.toggle-btn').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('delete');
    });


});