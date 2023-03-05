import { describe, test, expect, beforeEach, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

describe("Task", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Task);
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