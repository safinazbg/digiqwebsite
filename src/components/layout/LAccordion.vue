<template>
  <div class="lAccordion">
    <LAccordionItem
        :isOpen="selected === 0"
        @toggle="(openIt) => onToggleItem(0, openIt)"
    >
      <template #title>Work Package 1: A modular design of the curriculum</template>
      <template #body></template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 1"
        @toggle="(openIt) => onToggleItem(1, openIt)"
    >
      <template #title>Work Package 2:  Innovative course design</template>
      <template #body></template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 2"
        @toggle="(openIt) => onToggleItem(2, openIt)"
    >
      <template #title></template>
      <template #body></template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 3"
        @toggle="(openIt) => onToggleItem(3, openIt)"
    >
      <template #title></template>
      <template #body></template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 4"
        @toggle="(openIt) => onToggleItem(4, openIt)"
    >
      <template #title></template>
      <template #body></template>
    </LAccordionItem>
  </div>
</template>

<script>
import LAccordionItem from "@/components/layout/LAccordionItem";

export default {
  name: "LAccordion",
  components: {
    LAccordionItem,
  },
  props: {
    select: {type: Number, default: -1},
  },
  setup(props) {
    const selected = ref(props.select)
    const onToggleItem = (index, openIt) => openIt ? selected.value = index : -1
    return {
      onToggleItem,
      selected,
    }
  }
}
</script>

<style scoped>

</style>
