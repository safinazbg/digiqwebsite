<template>
  <div class="lAccordionItem">
    <div
        class="title"
        @click="onSelect"
    >
      <slot name="title"></slot>
    </div>
    <div class="body">
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
