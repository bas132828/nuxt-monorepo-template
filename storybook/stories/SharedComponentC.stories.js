import SharedComponentC from "../../packages/component-b/lib/SharedComponentC";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/SharedComponentC",
  component: SharedComponentC,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SharedComponentC },
  template: "<SharedComponentC />",
});
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Secondary = Template.bind({});
Secondary.args = {
  label: "SharedComponentC",
};
