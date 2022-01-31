import SharedComponentB from "../../packages/component-b/lib/SharedComponentB";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/SharedComponentB",
  component: SharedComponentB,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SharedComponentB },
  template: "<SharedComponentB />",
});
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-arg
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "SharedComponentB",
// };
