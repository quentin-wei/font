<template>
  <section class="About">
    <BaseButton
      text="普通按钮"
      @on-click="handleClick"
    />

    <HocButton
      @on-click="hocClick"
      text="高阶组件"
    >HocButton</HocButton>
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import BtnDebounce from "@/components/BtnDebounce.js";

export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    BaseButton,
    HocButton: BtnDebounce(BaseButton)
  },
  methods: {
    handleClick() {
      console.log("点击我了");
    },
    hocClick() {
      console.log("hoc click");
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.About {
  font-size: 14px;
  color: red;
}
</style>
