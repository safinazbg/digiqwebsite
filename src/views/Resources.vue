<template>
  <section class="resources section center-content">
    <div class="container">
      <div
          class="team-inner section-inner"
      >
        <c-section-header :data="sectionHeader" class="center-content reveal-from-top" style="margin-bottom: 3rem"/>
        <div
            class="tiles-wrap"
            :class="[
                        pushLeft && 'push-left',
                    ]">
          <fragment>

            <h1>Coming Soon....</h1>

          </fragment>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import CRoadmap from '@/components/sections/Roadmap.vue'

export default {
  name: "Resources",
  components: {
    // CRoadmap
  },
  data() {
    return {
      sectionHeader: {
        title: 'Resources',
        paragraph: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
