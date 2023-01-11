<template>
    <fragment>
        <c-team class="illustration-section-04"/>

        <c-generic-section top-divider>

        </c-generic-section>


        <c-cta has-bg-color invert-color split class="illustration-element-08" />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutAlternative.vue'
// import section header
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
// import sections
import CTeam from '@/components/sections/Team.vue'

// import some required elements
import CImage from '@/components/elements/Image.vue'




export default {
  name: 'Secondary',
  components: {
    CSectionHeader,
    CTeam,
    CImage,


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
