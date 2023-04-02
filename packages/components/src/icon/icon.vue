<template>
  <i :class="'cuIcon-' + props.name" :style="iconStyle"></i>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { IconNameType } from './type';
import './icon.less';
export interface IProps {
  name: IconNameType;
  size?: number | string;
  color?: string;
}

defineOptions({ name: 'Icon' });
const props = withDefaults(defineProps<IProps>(), {
  size: 16
});
const iconStyle = computed(() => {
  return { fontSize: props.size + 'px', color: props.color };
});
</script>
