<template>
  <i :class="classNames" :style="iconStyle"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IconNameType } from './type'
import './icon.less'
import { createNamespace } from '../../script/utils/bem'
export interface IProps {
  name: IconNameType
  size?: number | string
  color?: string
  spin?: 'spin' | 'pulse'
}
const bem = createNamespace('icon')

defineOptions({ name: 'Icon' })
const props = withDefaults(defineProps<IProps>(), {
  size: 16
})
const iconStyle = computed(() => {
  return { fontSize: props.size + 'px', color: props.color }
})
const classNames = computed(() => {
  let name = bem.e(props.name)
  let m = props.spin ? ` ${bem.m(props.spin)}` : ''
  return name + m
})
</script>
