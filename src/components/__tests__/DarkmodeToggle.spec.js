import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DarkmodeToggle from "../DarkmodeToggle.vue";

afterEach(() => {
    document.body.innerHTML = '';
    document.body.replaceWith(document.createElement('body'));
});

describe("DarkmodeToggle", () => {
    test("exists", () => {
        const wrapper = mount(DarkmodeToggle);
        expect(wrapper).not.toBe(undefined);
    });

    test("applies darkmode class on body element after a toggle", () => {
        const wrapper = mount(DarkmodeToggle);
        wrapper.find('label').trigger('click');
        expect(document.body.classList.toString()).toContain('darkmode'); 
    });

    test("defaults to lightmode", () => {
        const wrapper = mount(DarkmodeToggle);
        expect(document.body.classList.toString()).not.toContain('darkmode');
    });
});
