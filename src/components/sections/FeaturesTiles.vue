<template>
  <section
      class="features-tiles section center-content"
      :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
    <div class="container">
      <div
          class="features-tiles-inner section-inner"
          :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
        <c-section-header :data="sectionHeader" class="center-content"/>
        <div
            class="tiles-wrap"
            :class="[
                        pushLeft && 'push-left',
                    ]">
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item">
                  <c-image
                      :src="require('@/assets/images/feature-tile-icon-01.svg')"
                      alt="Feature tile icon 01"
                      :width="72"
                      :height="72"/>
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                  Work Package 1
                </h4>
                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                  Developing digital learning experiences in Quantum Technology such as ScienceAtHome (AU), Quantum
                  Odyssey (QI), QPlayLearn (UH), SpinDrops (TUM), Decide Game (ICFO), translated to 3 languages. </p>
              </div>
            </div>
          </div>

          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="100">
                  <c-image
                      :src="require('@/assets/images/feature-tile-icon-02.svg')"
                      alt="Feature tile icon 02"
                      :width="72"
                      :height="72"/>
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                  Work Package 2
                </h4>
                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                  Aligning teaching/learning courses delivered in three different formats: augmented, online and in
                  innovative experimental formats. </p>
              </div>
            </div>
          </div>

          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <c-image
                      :src="require('@/assets/images/feature-tile-icon-03.svg')"
                      alt="Feature tile icon 03"
                      :width="72"
                      :height="72"/>
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                  Work Package 3

                </h4>
                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                  Establishing and operating DQ-networks to form the central human element of the DigiQ program,
                  providing structured and individually tailored training for every DigiQ student.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item">
                  <c-image
                      :src="require('@/assets/images/feature-tile-icon-04.svg')"
                      alt="Feature tile icon 04"
                      :width="72"
                      :height="72"/>
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                  Work Package 4
                </h4>
                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                  Facilitating exchange semesters in which students may access the didactic innovations of the
                  developed DQ-courses, thesis projects, and establishing the DQ-Internship program based at nodes
                  in the research and industry centres. </p>
              </div>
            </div>
          </div>

          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="100">
                  <c-image
                      :src="require('@/assets/images/feature-tile-icon-05.svg')"
                      alt="Feature tile icon 05"
                      :width="72"
                      :height="72"/>
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                  Work Package 5
                </h4>
                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                  A shared infrastructure for the implementation of the DQ-Master program across all partner
                  formats: maintaining alignment between the educational programs offered at the partners and
                  tracking student participation in the DQ-Master.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {SectionTilesProps} from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesTiles',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'How is DigiQ organised?',
        paragraph: 'The project has 5 work packages aimed toward revealing the development of DIGIQ’s vision and work plan.'
      }
    }
  }
}
</script>
