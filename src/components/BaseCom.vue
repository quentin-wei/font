<template>
  <div>
    <span @click="handleClick">props: {{test}}</span>
  </div>
</template>

<script>
export default {
  name: "BaseComponent",
  props: {
    test: Number
  },
  methods: {
    handleClick() {
      this.$emit("customize-click");
    }
  }
};
</script>
