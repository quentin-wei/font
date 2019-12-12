<template>
  <div>
    <slot name="head"></slot>
    <p>===========</p>
    <span @click="handleClick">props: {{test}}</span>
    <p>===========</p>
    <slot>
      <p>默认slot</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "BaseComponent",
  props: {
    test: [Number, String]
  },
  methods: {
    handleClick() {
      this.$emit("customize-click");
    }
  },
  mounted() {
    // console.log(this.$options.render); // 查看组件render编译后的渲染函数
  }
};
</script>
