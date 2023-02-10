<template>
  <footer class="site-footer center-content-mobile" :class="topOuterDivider && 'has-top-divider'"
          style="background-color: #ebebeb"
  >
    <div class="container">
      <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
        <div class="footer-top space-between text-xxs">
          <c-logo/>
          <c-footer-social/>
          <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; max-width: 33%">

            <img src="../../assets/images/euflag.png" alt="" width="120px">
            <div>
              This project has received funding from
              the European Union’s Digital Europe
              Programme under grant agreement no.
              101084035.
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'
import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterSocial
  },
  props: {
    topOuterDivider: {
      type: Boolean,
      default: false
    },
    topDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>
