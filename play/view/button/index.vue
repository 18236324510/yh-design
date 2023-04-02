<template>
  <div class="wrapper">
    <Button
      @click="btnClick"
      size="lg"
      shadow
      color="red"
      borderPlus
      block
      loading
      >按钮</Button
    >
  </div>
</template>

<script setup lang="ts">
const btnClick = () => {
  console.log('click')
}
</script>

<style lang="less" scoped>
.wrapper {
}
</style>
