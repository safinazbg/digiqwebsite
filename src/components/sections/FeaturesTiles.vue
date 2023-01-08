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
                <c-section-header :data="sectionHeader" class="center-content" />
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
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    Robust workflow
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-02.svg')"
                                        alt="Feature tile icon 02"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Robust workflow
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-03.svg')"
                                        alt="Feature tile icon 03"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Robust workflow
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
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
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    Robust workflow
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-05.svg')"
                                        alt="Feature tile icon 05"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Robust workflow
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-06.svg')"
                                        alt="Feature tile icon 06"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Robust workflow
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
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
import { SectionTilesProps } from '@/utils/SectionProps.js'
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
        title: 'Tailor-made features',
        paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
      }
    }
  }
}
</script>