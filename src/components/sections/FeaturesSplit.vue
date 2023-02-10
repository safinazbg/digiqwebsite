<template>
  <section
      class="features-split section"
      style="margin-top: 4rem"
      :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
    <div class="container">
      <div
          class="features-split-inner section-inner"
          :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
        <div
            class="split-wrap"
            style="margin-top: -10rem"
            :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop',
                        alignTop && 'align-top'
                    ]">
          <div class="split-item reveal-from-top">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16">
                Mission of DigiQ
              </h3>
              <p class="m-0">
                In order to meet the emerging need for a quantum-ready workforce in the coming decade, university training efforts within Quantum Technology will not only have to be massively scaled up but also comprehensively reformed. There is an urgent need for a wider understanding of the underpinnings of the quantum revolution as well as an increased awareness for the commercial potential of quantum innovations in the coming generations of quantum physicists. The DigiQ project will spearhead a transformation of the educational ecosystem by introducing both a series of didactical innovations as well as a multinational program structure ready to be scaled up to the rest of the European Higher Education Area.
              </p>
            </div>
            <div
                class="w-full split-item-image"
                :class="imageFill && 'split-item-image-fill'">
              <c-image
                  :src="require('../../assets/images/mission.png')"
                  alt="Features split image 01"
              />
              <div class="w-full flex justify-end text-sm" style="margin-top: .5rem">
                DigiQ-Module: <a href="https://quatomic.com" target="_blank">Quantum Composer</a>, Aarhus University
              </div>
<!--              <div style="position:absolute;width:139.77%;max-width:139.77%;top:-13.88%;left:-16.47%;">-->
<!--                <c-image-->
<!--                    src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"-->
<!--                    alt="Features split top 01"-->
<!--                    :width="738"-->
<!--                    :height="570"/>-->
<!--              </div>-->
            </div>
          </div>

          <div class="split-item reveal-from-top"
          style="margin-top: 4rem">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16">
                Aims and Ambitions
              </h3>
              <div class="m-0">
                <ul>
                  <li>Develop 16 Quantum Technology Master degrees across Europe.</li>
                  <li>Provide a personalised route for thousands of top students to a Quantum Workforce.</li>
                  <li>Disseminate multilingual educational resources for the whole of Europe.</li>
                  <li>Help to build the Quantum Industry through a Pan-European mobility program.</li>
                </ul>
              </div>
            </div>
            <div
                class="split-item-image reveal-rotate-from-right"
                data-reveal-container=".split-item"
                :class="imageFill && 'split-item-image-fill'">
              <c-image
                  :src="require('../../assets/images/SMP outreach training.png')"
                  alt="Features split image 02"
              />
              <div class="w-full flex justify-end text-sm" style="margin-top: .5rem">
                DigiQ-Module: Outreach and DEI Training, <a href="https://www.sciencemeltingpot.com/" target="_blank">Science Melting Pot</a>
              </div>
<!--              <div style="position:absolute;width:140.91%;max-width:140.91%;top:-13.88%;left:-24.43%;">-->
<!--                <c-image-->
<!--                    :src="require('@/assets/images/features-split-top-02.png')"-->
<!--                    alt="Features split top 02"-->
<!--                    :width="744"-->
<!--                    :height="512"/>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {SectionSplitProps} from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: 'Simplify your design process',
        paragraph:
            'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
      }
    }
  }
}
</script>
