<template>
  <div>
    <button
      :disabled="disabled"
      :class="[bem.b(), { round, shadow, block }, size, border, colorName]"
      @click="btnClick"
    >
      <Icon v-if="loading" name="loading2" spin="spin"></Icon><slot></slot>
    </button>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from '../../script/utils/bem'
import { ColorType } from './type'
import Icon from '../icon'
import './button.less'
import { toRefs, withDefaults } from 'vue'
export interface IProps {
  round?: boolean
  size?: 'sm' | 'lg'
  shadow?: boolean
  color?: ColorType
  borderPlus?: boolean
  borderColor?: ColorType
  block?: boolean
  loading?: boolean
  disabled?: boolean
}
defineOptions({ name: 'Button' })
const emit = defineEmits<{
  (e: 'click'): void
}>()
const {
  round,
  size,
  shadow,
  color,
  borderPlus,
  borderColor,
  block,
  loading,
  disabled
} = toRefs(withDefaults(defineProps<IProps>(), {}))
const bem = createNamespace('button')

const colorName = color?.value ? `bg-${color.value}` : ''
const border = borderColor?.value
  ? `line${borderPlus?.value ? 's' : ''}-${borderColor.value}`
  : ''

const btnClick = () => {
  emit('click')
}
</script>
