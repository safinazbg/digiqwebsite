<template>
    <fragment>
        <c-hero-split image-fill class="illustration-section-01" />
        <c-clients top-divider bottom-divider />
        <c-features-split invert-mobile image-fill class="illustration-section-03" />
        <c-features-tiles class="gradient-section" />
        <c-pricing has-bg-color top-divider pricing-switcher />
        <c-cta has-bg-color invert-color split class="illustration-element-08" />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CHeroSplit from '@/components/sections/HeroSplit.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'

export default {
  name: 'Home',
  components: {
    CHeroSplit,
    CFeaturesSplit,
    CFeaturesTiles,
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
