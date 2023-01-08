<template>
  <section
      class="features-split section"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div
                class="split-item-image illustration-element-03"
                :class="imageFill && 'split-item-image-fill'">
              <c-image
                  :src="require('@/assets/images/features-split-image.svg')"
                  alt="Features split image 01"
                  :width="528"
                  :height="396"/>
              <div style="position:absolute;width:139.77%;max-width:139.77%;top:-13.88%;left:-16.47%;">
                <c-image
                    :src="require('@/assets/images/features-split-top-01.png')"
                    alt="Features split top 01"
                    :width="738"
                    :height="570"/>
              </div>
            </div>
          </div>

          <div class="split-item reveal-from-top">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16">
                Aims and Ambitions
              </h3>
              <p class="m-0">
                The DigiQ project will provide high quality and pan-European standardisation in higher education
                quantum technology programs. It aims to take a major step in realising the Digital Decade goal “for
                Europe to be at the cutting edge of quantum capabilities by 2030”.
              </p>
            </div>
            <div
                class="split-item-image illustration-element-04 reveal-rotate-from-right"
                data-reveal-container=".split-item"
                :class="imageFill && 'split-item-image-fill'">
              <c-image
                  :src="require('@/assets/images/features-split-image.svg')"
                  alt="Features split image 02"
                  :width="528"
                  :height="396"/>
              <div style="position:absolute;width:140.91%;max-width:140.91%;top:-13.88%;left:-24.43%;">
                <c-image
                    :src="require('@/assets/images/features-split-top-02.png')"
                    alt="Features split top 02"
                    :width="744"
                    :height="512"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {SectionSplitProps} from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      // sectionHeader: {
      //   title: 'Simplify your design process',
      //   paragraph:
      //       'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
      // }
    }
  }
}
</script>
