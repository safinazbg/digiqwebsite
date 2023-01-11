<template>
    <section
        class="team section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">

        <div class="container">
            <div
                class="team-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content reveal-from-top" />
                <div
                    class="tiles-wrap has-top-divider"

                    :class="[
                        pushLeft && 'push-left',
                    ]">
<!--this is the place where I added inline style-->
                  <div style="padding-left: 10px; padding-right: 40px; margin-top: -1rem">
                    <h2>Aarhus University</h2>
                    <img src="../../assets/images/AUlogo.png" height="150" width="150"/>
                    <p style="contain: size; font-size: 14px; line-height: normal; margin-top: 1rem">Aarhus University is a top 100 university with award-winning research and 50+ Master's and Bachelor's programmes taught in English.</p>
                  </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/jacob.jpg')"
                                        alt="Team member 01"

                                        style="border-radius: 50%; height: 100px; width: 100px"

                                    />
                                </div>
                            </div>
                            <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Jacob Sherson
                                </h5>
                                <div class="team-item-role text-xxs tt-u text-color-primary mb-8">
                                    Professor
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/simon.jpg')"
                                        alt="Team member 02"
                                        style="border-radius: 50%; width: 100px; height: 100px"
                                    />
                                </div>
                            </div>
                            <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">
                                <h5 class="team-item-name mt-0 mb-4">
                                  Simon Richard Goorney
                                </h5>
                                <div class="team-item-role text-xxs tt-u text-color-primary mb-8">
                                    PhD Fellow
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

<!--                    <div class="tiles-item">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">-->
<!--                                <div class="team-item-image mb-24 illustration-element-07">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-03.jpg')"-->
<!--                                        alt="Team member 03"-->
<!--                                        :width="190"-->
<!--                                        :height="190" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Clifford Kennedy-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xxs tt-u text-color-primary mb-8">-->
<!--                                    CEO & Co-Founder-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">-->
<!--                                <div class="team-item-image mb-24">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-04.jpg')"-->
<!--                                        alt="Team member 01"-->
<!--                                        :width="190"-->
<!--                                        :height="190" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Clifford Kennedy-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xxs tt-u text-color-primary mb-8">-->
<!--                                    CEO & Co-Founder-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">-->
<!--                                <div class="team-item-image mb-24">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-05.jpg')"-->
<!--                                        alt="Team member 05"-->
<!--                                        :width="190"-->
<!--                                        :height="190" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Clifford Kennedy-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xxs tt-u text-color-primary mb-8">-->
<!--                                    CEO & Co-Founder-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="tiles-item">-->
<!--                        <div class="tiles-item-inner">-->
<!--                            <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">-->
<!--                                <div class="team-item-image mb-24">-->
<!--                                    <c-image-->
<!--                                        :src="require('@/assets/images/team-member-06.jpg')"-->
<!--                                        alt="Team member 06"-->
<!--                                        :width="190"-->
<!--                                        :height="190" />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">-->
<!--                                <h5 class="team-item-name mt-0 mb-4">-->
<!--                                    Clifford Kennedy-->
<!--                                </h5>-->
<!--                                <div class="team-item-role text-xxs tt-u text-color-primary mb-8">-->
<!--                                    CEO & Co-Founder-->
<!--                                </div>-->
<!--                                <p class="m-0 text-sm">-->
<!--                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>


<!--              <div-->
<!--                  class="tiles-wrap has-top-divider"-->
<!--                  :class="[-->
<!--                        pushLeft && 'push-left',-->
<!--                    ]">-->




<!--                <div class="tiles-item" style="margin-left: 70px">-->
<!--                  <div class="tiles-item-inner">-->
<!--                    <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">-->
<!--                      <div class="team-item-image mb-24">-->
<!--                        <c-image-->
<!--                            :src="require('@/assets/images/jacob.jpg')"-->
<!--                            alt="Team member 01"-->
<!--                            :width="190"-->
<!--                            :height="190" />-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">-->
<!--                      <h5 class="team-item-name mt-0 mb-4">-->
<!--                        Jacob Sherson-->
<!--                      </h5>-->
<!--                      <div class="team-item-role text-xxs tt-u text-color-primary mb-8">-->
<!--                        Professor-->
<!--                      </div>-->
<!--                      <p class="m-0 text-sm">-->
<!--                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="tiles-item">-->
<!--                  <div class="tiles-item-inner">-->
<!--                    <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">-->
<!--                      <div class="team-item-image mb-24">-->
<!--                        <c-image-->
<!--                            :src="require('@/assets/images/simon.jpg')"-->
<!--                            alt="Team member 02"-->
<!--                            :width="190"-->
<!--                            :height="190" />-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">-->
<!--                      <h5 class="team-item-name mt-0 mb-4">-->
<!--                        Simon Richard Goorney-->
<!--                      </h5>-->
<!--                      <div class="team-item-role text-xxs tt-u text-color-primary mb-8">-->
<!--                        PhD Fellow-->
<!--                      </div>-->
<!--                      <p class="m-0 text-sm">-->
<!--                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->


            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CTeam',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Meet the team',
        paragraph:
          'DigiQ is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
}
</script>
