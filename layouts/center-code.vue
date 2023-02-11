<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 5,
    // Don't really want to go above ten, it's VERY big and fits only a few lines on screen
    validator: (value: number) => typeof value === 'number' && value >= 1 && value <= 10
  }
})

const codeClass = `code-${props.size}`;
</script>

<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <div class="my-auto" :class="codeClass">
      <slot />
    </div>
  </div>
</template>