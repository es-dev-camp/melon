import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("とりあえずHomeにマウントするだけ", () => {
    const msg = "";
    const wrapper = shallowMount(Home, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(new RegExp(`^${msg}.*`));
  });
});
