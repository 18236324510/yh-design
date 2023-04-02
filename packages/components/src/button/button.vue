<template>
  <div>
    <view class="padding flex flex-wrap justify-between align-center bg-white">
      <button class="cu-btn">默认</button>
      <button class="cu-btn round">圆角</button>
      <button class="cu-btn cuIcon"></button>
    </view>
    <view class="padding flex flex-wrap justify-between align-center bg-white">
      <button class="cu-btn round sm">小尺寸</button>
      <button class="cu-btn round">默认</button>
      <button class="cu-btn round lg">大尺寸</button>
    </view>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from '../../script/utils/bem'
import './button.less'
const bem = createNamespace('button')
defineOptions({ name: 'Button' })
</script>
