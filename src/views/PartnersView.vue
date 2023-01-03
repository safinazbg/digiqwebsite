<template>
  <div class="partnersView">
    <h2 class="text-4xl text-center mb-10">Partners</h2>
    <LSection>
      <template #body>

        <LImageText>
          <template #image>
            <img
                src="https://images.unsplash.com/photo-1613155251873-0f158ee55a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1711&q=80"
                alt="unsplash image by"
                class="h-full"
            >
          </template>

          <template #text>
            <LBoxText>
              <template #title>Collaborators</template>
              <template #body>
                The Center for Hybrid Intelligence is an interdisciplinary research team exploring digital interfaces that facilitate collaboration between humans and algorithms and explores how humans can use advanced technology as a 21st century superpower for solving complex problems in ethical ways.
              </template>
            </LBoxText>
          </template>
        </LImageText>


      </template>
    </LSection>
  </div>
</template>

<script>
import LBoxText from "@/components/layout/LBoxText";
import LImageText from "@/components/layout/LImageText";
import LSection from "@/components/layout/LSection";


export default {
  name: "PartnersView",
  components: {
    LBoxText,
    LImageText,
    LSection,

  }
}
</script>

<style scoped>

</style>
