<template>
  <div class="landingPage h-full">
    <div class="h-full flex flex-col gap-24 py-16">

      <LSection>
        <template #body>

          <div class="rounded-lg font-semibold text-5xl text-qBlue">
            <div class="w-full h-full p-16" style="line-height: 3.5rem;">
              Transforming the Landscape of Education and Training for the Future of Quantum Workforce
            </div>
          </div>

        </template>
      </LSection>

      <LSection>
        <template #body>

          <LImageText
              :image-left="false"
              class="rounded-lg overflow-hidden bg-white/10"
          >

            <template #image>
              <!--todo: check unsplash license-->
              <img
                  src="https://images.unsplash.com/photo-1608562719218-920013a7a249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt="unsplash image by Sigmund">

            </template>

            <template #text>

              <LBoxText>
                <template #title>Mission of DigiQ</template>
                <template #body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet consequatur delectus dolores
                  est
                  impedit iste, iusto molestiae neque qui.
                </template>
                <template #link>
                  <router-link to="/project" class="font-bold">Project overview >></router-link>
                </template>
              </LBoxText>

            </template>

          </LImageText>

        </template>
      </LSection>
      <LSection>
        <template #body>

          <LImageText
              class="rounded-lg overflow-hidden bg-white/10"
          >

            <template #image>
              <!--todo: check unsplash license-->
              <img
                  src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1639&q=80"
                  alt="unsplash image by Michael Dziedzic"
                  style="filter: saturate(0) brightness(1.4) invert(1);"
                  class="h-full"
              >

            </template>

            <template #text>

              <LBoxText>
                <template #title>Our Aims and Ambitions</template>
                <template #body>
                  The DigiQ project will provide high quality and pan-European standardisation in higher education
                  quantum
                  technology programs. It aims to take a major step in realising the Digital Decade goal “for Europe to
                  be at
                  the cutting edge of quantum capabilities by 2030”.
                </template>
                <template #link>
                  <router-link to="/project#GoalsAndObjectives" class="font-bold">What steps is DigiQ taking to achieve this goal? >>
                  </router-link>
                </template>
              </LBoxText>

            </template>
          </LImageText>

        </template>
      </LSection>

      <LSection>
        <template #body>

          <div class="flex gap-6">

            <LBoxText>
              <template #title>How is DigiQ Organized?</template>
              <template #body>
                The project has 5 work packages aimed toward revealing the development of DIGIQ’s vision and work plan.

                <div class="mt-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                  <LDefinitionBox class="p-6 border border-gray-200 border-opacity-60 bg-gray-100">
                    <template #label>Work Package 1</template>
                    <template #elaboration>
                      Developing digital learning experiences in Quantum Technology such as ScienceAtHome (AU), Quantum
                      Odyssey (QI), QPlayLearn (UH), SpinDrops (TUM), Decide Game (ICFO), translated to 3 languages.
                    </template>
                  </LDefinitionBox>
                  <LDefinitionBox class="p-6 border border-gray-200 border-opacity-60 bg-gray-100">
                    <template #label>Work Package 2</template>
                    <template #elaboration>
                      Aligning teaching/learning courses delivered in three different formats: augmented, online and in
                      innovative experimental formats.
                    </template>
                  </LDefinitionBox>
                  <LDefinitionBox class="p-6 border border-gray-200 border-opacity-60 bg-gray-100">
                    <template #label>Work Package 3</template>
                    <template #elaboration>
                      Establishing and operating DQ-networks to form the central human element of the DigiQ program,
                      providing structured and individually tailored training for every DigiQ student.
                    </template>
                  </LDefinitionBox>
                  <LDefinitionBox class="p-6 border border-gray-200 border-opacity-60 bg-gray-100">
                    <template #label>Work Package 4</template>
                    <template #elaboration>
                      Facilitating exchange semesters in which students may access the didactic innovations of the
                      developed DQ-courses, thesis projects, and establishing the DQ-Internship program based at nodes
                      in the research and industry centres.
                    </template>
                  </LDefinitionBox>
                  <LDefinitionBox class="p-6 border border-gray-200 border-opacity-60 bg-gray-100">
                    <template #label>Work Package 5</template>
                    <template #elaboration>
                      A shared infrastructure for the implementation of the DQ-Master program across all partner
                      formats: maintaining alignment between the educational programs offered at the partners and
                      tracking student participation in the DQ-Master.
                    </template>
                  </LDefinitionBox>
                </div>

              </template>
            </LBoxText>

          </div>

        </template>
      </LSection>

      <LSection>
        <template #body>

          <LBoxText class="rounded-lg overflow-hidden bg-white/10">
            <template #body>
              <div class="w-full flex flex-col items-center">
                <div class="font-semibold text-3xl pb-12">
                  DigiQ plans to spearhead innovation and create an impact
                </div>
                <div class="text-xl flex flex-col items-start gap-4">
                  <div class="flex items-center gap-4">
                    <svg width="100" height="100">
                      <circle cx="50" cy="50" r="40" stroke="#ff781f" stroke-width="4" fill="#110a36" />
                    </svg>
                    Enhancing the quality of Quantum Technology in higher education
                  </div>
                  <div class="flex items-center gap-4">
                    <svg width="100" height="100">
                      <circle cx="50" cy="50" r="40" stroke="#ff781f" stroke-width="4" fill="#110a36" />
                    </svg>
                    Feeding the QT Workforce pipeline
                  </div>
                  <div class="flex items-center gap-4">
                    <svg width="100" height="100">
                      <circle cx="50" cy="50" r="40" stroke="#ff781f" stroke-width="4" fill="#110a36" />
                    </svg>
                    Impact on Industry including SMEs
                  </div>
                </div>
              </div>
            </template>
            <template #link>
              <router-link to="/project#DelieverablesAndImpact" class="font-bold"> Deliverables and Expected Impact >>
              </router-link>
            </template>
          </LBoxText>

        </template>
      </LSection>
    </div>
  </div>
</template>
<script>
import LSection from "@/components/layout/LSection";
import LImageText from "@/components/layout/LImageText";
import LBoxText from "@/components/layout/LBoxText";
import LDefinitionBox from "@/components/layout/LDefinitionBox";


export default {
  name: "LandingPage",
  components: {
    LBoxText,
    LDefinitionBox,
    LImageText,
    LSection,
  },
}
</script>
