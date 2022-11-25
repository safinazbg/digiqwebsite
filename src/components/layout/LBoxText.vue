<template>
  <div class="lBoxText p-12">
    <div class="text-xl font-semibold pb-4">
      <slot name="title"></slot>
    </div>
    <div class="flex flex-col justify-between">
      <div>
        <slot name="body"></slot>
      </div>
      <div class="pt-8 self-end">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LBoxText"
}
</script>

<style scoped>

</style>
