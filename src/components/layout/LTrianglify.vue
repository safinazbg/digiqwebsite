<template>
  <div class="lTrianglify w-full h-full">
    <div
        ref="angles"
        class="angles w-full h-full min-h-xl min-w-xl absolute l-0 t-0 -z-1"
    ></div>
    <slot name="body">

    </slot>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import trianglify from 'trianglify'

export default {
  name: "LTrianglify",
  setup() {
    const angles = ref(null)

    const crystallize = () => {
      angles.value.innerHTML = ''
      const dimensions = {
        width: angles.value.scrollWidth,
        height: Math.max(
            angles.value.scrollHeight,
            document.body.scrollHeight
        ) + 500,
        colorFunction: trianglify.colorFunctions.interpolateLinear(0.6)
      }
      const pattern = trianglify(dimensions)

      angles.value
          .appendChild(pattern.toCanvas())

      angles.value.style.zIndex = -10
      angles.value.style.opacity = 0.8
    }

    onMounted(() => {

      setTimeout(crystallize, 100)

      window.addEventListener('resize', () => setTimeout(crystallize, 200))

    })

    return {
      angles,
    }
  }
}
</script>

<style scoped>

</style>
