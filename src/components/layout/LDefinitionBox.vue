<template>
  <div class="lDefinitionBox">

    <div class="font-semibold pb-4">
      <slot name="label"></slot>
    </div>
    <div>
      <slot name="elaboration"></slot>
    </div>

  </div>
</template>

<script>

export default {
  name: "LDefinitionBox",
}
</script>

<style scoped>

</style>
