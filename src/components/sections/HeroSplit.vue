<template>
    <section
        class="hero section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="hero-inner section-inner"
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
                    <div class="split-item">
                        <div class="hero-content split-item-content center-content-mobile">
                            <h1 class="mt-0 mb-16 reveal-from-left">
                              Transforming the Landscape of Education and Training for the Future of Quantum Workforce
                            </h1>
                            <p class="mt-0 mb-32 reveal-from-left" data-reveal-delay="200">
                                DigiQ Projet is lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum in nobis voluptates met deserunt maiores.
                            </p>
<!--                            <div class="reveal-from-left" data-reveal-delay="400">-->
<!--                                <c-button tag="a" color="primary" wide-mobile href="#">-->
<!--                                    Pricing and plans-->
<!--                                </c-button>-->
<!--                            </div>-->
                        </div>
                        <div class="hero-figure is-3d split-item-image reveal-from-right">
                            <c-image
                                class="has-shadow"
                                src="https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                                alt="Hero image"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CHeroSplit',
  components: {
    CButton,
    CImage
  },
  mixins: [SectionSplitProps]
}
</script>
