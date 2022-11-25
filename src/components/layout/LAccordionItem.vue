<template>
  <div class="lAccordionItem bg-white">
    <div
        class="title font-semibold text-2xl mt-4 p-4 border-t border-x border-black"
        :class="{'border-b': !isOpen}"
        @click="onSelect"
    >
      <slot name="title"></slot>
    </div>
    <div
        class="body p-4 border-x border-b border-black"
        v-show="isOpen"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LAccordionItem",
  emits: ['toggle'],
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    const onSelect = () => emit('toggle', !props.isOpen)
    return {
      onSelect,
    }
  }
}
</script>

<style scoped>

</style>
