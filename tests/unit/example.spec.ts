import { shallowMount } from "@vue/test-utils";
import InputForm from "@/components/InputForm.vue";

describe("components/InputForm.vue", () => {
  it("とりあえずInputFormにマウントするだけ", () => {
    const msg = "";
    const wrapper = shallowMount(InputForm, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(new RegExp(`^${msg}.*`));
  });
});
