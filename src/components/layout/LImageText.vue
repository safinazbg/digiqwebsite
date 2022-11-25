<template>
  <div class="lImageText w-full">

    <div class="flex flex-wrap items-stretch">

      <div
          class="w-full display-none xs:block md:w-1/3"
          :class="{
            'order-1': imageLeft,
            'order-2': !imageLeft
          }"
      >

        <slot name="image">


        </slot>

      </div>
      <div
          class="w-full md:w-2/3 h-full flex-grow"
          :class="{
            'order-2': imageLeft,
            'order-1': !imageLeft
          }"
      >

        <slot name="text">

          <LPlaceholder
              label="text"
              :isAlt="true"
          ></LPlaceholder>

        </slot>

      </div>

    </div>
  </div>
</template>

<script>
import LPlaceholder from "./LPlaceholder";


export default {
  name: "LImageText",
  props: {
    imageLeft: {
      type: Boolean,
      default: true
    },
  },
  components: {
    LPlaceholder,
  },
}
</script>

<style scoped>

</style>
