<template>
    <fragment>
        <c-team class="illustration-section-04"/>

        <c-generic-section top-divider>
            <div class="container-xs">
                <h2 class="mt-0">Lorem ipsum is placeholder text commonly used in the graphic.</h2>
                <p>
                    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <figure>
                    <c-image
                        class="image-larger"
                        :src="require('@/assets/images/image-placeholder.png')"
                        alt="Image placeholder"
                        :width="712"
                        :height="400" />
                    <figcaption class="text-color-low">A super-nice image <span role="img" aria-label="smile">😀</span></figcaption>
                </figure>
                <h4>Flexibility</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
            </div>
        </c-generic-section>

        <c-generic-section top-divider class="center-content">
            <div class="container-xs">

            </div>
        </c-generic-section>



        <c-cta has-bg-color invert-color split class="illustration-element-08" />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutAlternative.vue'
// import section header
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
// import sections
import CTeam from '@/components/sections/Team.vue'

// import some required elements
import CImage from '@/components/elements/Image.vue'




export default {
  name: 'Secondary',
  components: {
    CSectionHeader,
    CTeam,
    CImage,


  },
  data() {
    return {
      genericSection01Header: {
        title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection02Header: {
        title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection03Header: {
        title: 'Modal - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection04Header: {
        title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
      },
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
