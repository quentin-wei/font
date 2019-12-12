export default function WithConsole(component) {
  return {
    // 运行时编译的版本 不能使用模板 必须使用 render
    // template: `<wrapped v-bind="$attrs" />`,
    // components: {
    //   wrapped: component
    // },
    props: component.props,
    render(h) {
      return h(component, {
        on: this.$listeners, // 透传事件
        attrs: this.$attrs, // 透传没有被声明为 props 的属性
        props: this.$props  // 透传 props
      });
    },
    mounted() {
      // console.log("this.$attrs", this.$attrs); // 标签中的属性 不包含 props
      // console.log("this.$listeners", this.$listeners); // 组件绑定的方法
      // console.log("this.$props", this.$props);
      // console.log("高阶组件中的钩子");
    }
  };
}
