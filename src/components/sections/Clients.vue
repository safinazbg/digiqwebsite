<template>
    <section
        class="clients section reveal-fade"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="clients-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <ul class="list-reset">
                    <li class="reveal-scale-up" data-reveal-delay="400">
                        <c-image
                            :src="require('@/assets/images/AUlogo.png')"
                            alt="Client 01"
                            :width="124"
                            :height="24" />
                    </li>
                    <li class="reveal-scale-up" data-reveal-delay="200">
                        <c-image
                            :src="require('@/assets/images/AUlogo.png')"
                            alt="Client 02"
                            :width="83"
                            :height="30" />
                    </li>
                    <li class="reveal-scale-up">
                        <c-image
                            :src="require('@/assets/images/AUlogo.png')"
                            alt="Client 03"
                            :width="125"
                            :height="39" />
                    </li>
                    <li class="reveal-scale-up" data-reveal-delay="200">
                        <c-image
                            :src="require('@/assets/images/AUlogo.png')"
                            alt="Client 04"
                            :width="150"
                            :height="31" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CClients',
  components: {
    CImage
  },
  mixins: [SectionProps]
}
</script>
