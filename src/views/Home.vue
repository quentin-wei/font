<template>
  <div class="home">
    <!-- <p>111111222222</p> -->
    <ul v-if="users.length">
      <li
        v-for="(item,index) in users"
        :key="index"
      >
        {{item.id}} --:---{{item.name}}
      </li>
    </ul>
    <!-- <p>别打，咋盯把打电话呢？</p> -->
    <h3>基础组件</h3>
    <BaseCom
      @customize-click="onClick"
      :test="100"
    />

    <h3>高阶组件</h3>
    <HocBaseCom
      title="test title"
      @customize-click="onClick"
      :test="1000"
    />

    <h3>基础组件 && slot</h3>
    <BaseComSlot
      @customize-click="onClick"
      test="slot text"
    >
      <h4 slot="head">具名slot</h4>
      <p>覆盖默认slot</p>
    </BaseComSlot>

    <h3>高阶组件 && slot</h3>
    <HocBaseComSlot
      @customize-click="onClick"
      test="高阶组件 slot text"
    >
      <h4 slot="head">高阶组件 具名slot</h4>
      <p>高阶组件 覆盖默认slot</p>
    </HocBaseComSlot>

    <p class="tip">1. 查看组件render编译后的渲染函数 this.$options.render</p>

  </div>
</template>

<script>
import axios from "axios";

import BaseCom from "@/components/BaseCom";
import BaseComSlot from "@/components/BaseComSlot";

import HocBaseCom from "@/components/hoc.js"; // 高阶组件
import HocBaseComSlot from "@/components/hocSlot.js";

import commonMixin from "../mixin/commonMixin";

export default {
  name: "home",
  mixins: [commonMixin],

  data() {
    return {
      users: []
    };
  },
  components: {
    BaseCom,
    HocBaseCom: HocBaseCom(BaseCom), // 高阶组件 传入一个组件

    BaseComSlot,
    HocBaseComSlot: HocBaseComSlot(BaseComSlot)
  },
  methods: {
    onClick() {
      console.log("123");
    }
  },
  mounted() {
    // axios.get("/api/users").then(res => {
    //   this.users = res.data;
    // });
    // console.log(this.msg);
  }
};
</script>


<style>
.tip {
  color: red;
}
</style>
