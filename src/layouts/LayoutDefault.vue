<template>
    <fragment>
        <c-header nav-position="right" />
        <main class="site-content bg-blue-200">
            <slot />
        </main>
        <c-footer class="illustration-section-06" />
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header.vue'
import CFooter from '@/components/layout/Footer.vue'
export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>
