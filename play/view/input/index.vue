<template>
  <div class="wrapper">
    {{ value }}
    <Input label="崔云翔" v-model="value">
      <template v-slot:right>
        <Button color="green" shadow>验证码</Button>
      </template>
    </Input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let value = ref('xixixix')
</script>

<style lang="less" scoped>
.wrapper {
}
</style>
