<template>
  <div class="wrapper">
    <div :class="[formGroup, 'margin-top']">
      <div class="title" v-if="label">{{ label }}</div>
      <input
        :value="modelValue"
        @input="onInput"
        placeholder="两字短标题"
        name="input"
      />
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '../../script/utils/bem'
import { toRefs } from 'vue'
export interface IProps {
  label: string
  modelValue: string | number
}
const bem = createNamespace('form')
let formGroup = bem.m('group')
defineOptions({ name: 'Input' })
const emit = defineEmits({
  'update:modelValue': (value: string | number) => value
})
const props = withDefaults(defineProps<IProps>(), {})
const { label, modelValue } = toRefs(props)

const onInput = ($event: Event) => {
  let target = $event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
