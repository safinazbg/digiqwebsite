<template>
  <div class="projectView h-full flex flex-col gap-24 py-16">

    <LSection>
      <template #body>

        <LBoxText class="rounded-lg overflow-hidden bg-darkBlue1/10">
          <template #body>
            <div class="w-full flex flex-col items-center">
              <div class="font-semibold text-3xl pb-12">
                Project Overview
              </div>
              <div class="text-xl flex flex-col items-start gap-4">
                text
              </div>
            </div>
          </template>
        </LBoxText>
      </template>
    </LSection>


    <LSection>
      <template #body>

        <LBoxText class="rounded-lg overflow-hidden bg-darkBlue1/10">
          <template #body>
            <div class="w-full flex flex-col items-center">
              <div class="font-semibold text-3xl pb-12">
                Goals and Objectives
              </div>
              <div class="text-xl flex flex-col items-start gap-4">
                <div class="flex items-center gap-4">
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
                  </svg>
                  Develop a Pan-European Quantum Technology Master, offering high quality education online and
                  in-person.

                </div>
                <div class="flex items-center gap-4">
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
                  </svg>
                  Comprehensively align the education efforts with Industry Needs, training students to form the
                  backbone of the future quantum-aware workforce.
                </div>
                <div class="flex items-center gap-4">
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
                  </svg>
                  Pave the way for Pan-European scaleup of efforts by formalising the efforts of the Quantum Technology
                  Education community.
                </div>
                <div class="flex items-center gap-4">
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
                  </svg>
                  Promoting wide access to skills in Quantum Technology with an inclusive program design.
                </div>
              </div>
            </div>
          </template>
        </LBoxText>

      </template>
    </LSection>

    <LSection>
      <template #body>

        <LBoxText class="rounded-lg overflow-hidden bg-darkBlue1/10">
          <template #body>
            <div class="w-full flex flex-col items-center">
              <div class="font-semibold text-3xl pb-12">
                Structure
              </div>
              <div class="text-xl flex flex-col items-start gap-4">
                text
              </div>
            </div>
          </template>
        </LBoxText>
      </template>
    </LSection>

  </div>
</template>

<script>
import LSection from "@/components/layout/LSection";
import LBoxText from "@/components/layout/LBoxText";


export default {
  name: "ProjectView",
  components: {
    LBoxText,
    LSection,
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>

</style>

