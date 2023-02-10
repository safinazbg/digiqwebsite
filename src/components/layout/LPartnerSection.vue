<template>
  <div class="lPartnerSection section center-content">
    <div
        class="organisation"
    >
      <slot name="organisation">
        organisation name and logo
      </slot>
    </div>
    <div
        class="people"
    >
      <slot name="people">
        people
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LPartnerSection"
}
</script>

<style scoped>
.section {
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-column-gap: 2rem;
}

@media (max-width: 1000px) {
  .section {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-column-gap: 1rem;
  }
}

@media (max-width: 900px) {
  .section {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
  }
}
</style>