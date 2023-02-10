<template>
  <section
      class="contact section center-content"
      :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">

    <div class="container">
      <div
          class="team-inner section-inner"
      >
        <c-section-header :data="sectionHeader" class="center-content reveal-from-top" style="margin-bottom: 3rem" />
        <div
            class="tiles-wrap"
            :class="[
                        pushLeft && 'push-left',
                    ]">
          <!--this is the place where I added inline style-->

          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                <div class="team-item-image mb-24">
                  <c-image
                      :src="require('../assets/images/JacobSherson.png')"
                      alt="Team member 01"
                      style="border-radius: 50%; height: 100px; width: 100px;"

                  />
                </div>
              </div>
              <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                <h5 class="team-item-name mt-0 mb-4">
                  Jacob Sherson
                </h5>

                <p class="m-0 text-sm">
                  Coordinator, WP1, WP5 Lead
                  <a href="mailto:sherson@mgmt.au.dk">sherson@mgmt.au.dk</a>
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
                <p class="m-0 text-sm">
                  Project Manager <br>
                  <a href="mailto:simon.goorney@phys.au.dk">simon.goorney@phys.au.dk</a>
                </p>
              </div>
            </div>
          </div>
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">
                <div class="team-item-image mb-24">
                  <c-image
                      :src="require('../assets/images/300px-Placeholder_no_text.svg.png')"
                      alt="Team member 02"
                      style="border-radius: 50%; width: 100px; height: 100px"
                  />
                </div>
              </div>
              <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">
                <h5 class="team-item-name mt-0 mb-4">
                  Aurel Gabris
                </h5>
                <p class="m-0 text-sm">
                  WP2 Lead <br>
                  <a href="gabris.aurel@fjfi.cvut.cz">gabris.aurel@fjfi.cvut.cz</a>
                </p>
              </div>
            </div>
          </div>
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">
                <div class="team-item-image mb-24">
                  <c-image
                      :src="require('../assets/images/300px-Placeholder_no_text.svg.png')"
                      alt="Team member 03"
                      style="border-radius: 50%; width: 100px; height: 100px"
                  />
                </div>
              </div>
              <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">
                <h5 class="team-item-name mt-0 mb-4">
                  Martin Gaerttner
                </h5>
                <p class="m-0 text-sm">
                  WP3 Lead <br>
                  <a href="mailto:martin.gaerttner@kip.uni-heidelberg.de">martin.gaerttner@kip.uni-heidelberg.de</a>
                </p>
              </div>
            </div>
          </div>
          <div class="tiles-item">
            <div class="tiles-item-inner">
              <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">
                <div class="team-item-image mb-24">
                  <c-image
                      :src="require('../assets/images/Küchemann.jpg')"
                      alt="Team member 02"
                      style="border-radius: 50%; width: 100px; height: 100px"
                  />
                </div>
              </div>
              <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">
                <h5 class="team-item-name mt-0 mb-4">
                  Stefan Küchemann
                </h5>
                <p class="m-0 text-sm">
                  WP4 Lead <br>
                  <a href="mailto:s.kuechemann@lmu.de">s.kuechemann@lmu.de</a>
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
  name: 'Contact',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Contact',
        paragraph: ''
      }
    }
  }
}
</script>
