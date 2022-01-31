import SharedComponentA from "../../packages/component-a/lib/SharedComponentA";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/SharedComponentA",
  component: SharedComponentA,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SharedComponentA },
  template: "<SharedComponentA />",
});

export const Secondary = Template.bind({});
Secondary.args = {
  label: "SharedComponentA",
};
