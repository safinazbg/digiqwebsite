<template>
    <fragment>

        <c-team class="illustration-section-04"/>

        <c-generic-section top-divider>

        </c-generic-section>


        <c-cta has-bg-color invert-color split class="illustration-element-08" />
    </fragment>
</template>

<script>
import CLayout from '@/layouts/LayoutAlternative.vue'
import CTeam from '@/components/sections/Team.vue'
import LPartnerSection from "@/components/layout/LPartnerSection.vue";

export default {
  name: 'Partners',
  components: {
    CTeam,
    LPartnerSection,
  },
  data() {
    return {
      genericSection01Header: {
        title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection02Header: {
        title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection03Header: {
        title: 'Modal - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection04Header: {
        title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
      },
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
