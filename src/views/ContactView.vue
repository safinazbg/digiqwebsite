<template>
  <div class="contactView">
    <div class="text-2xl font-semibold">Title here</div>
    <p>Some content here </p>
    <div class="my-0 md:mt-4">
      <div class="flex w-full flex-wrap">
        <div class="
            flex w-full flex-col gap-y-4
            order-1 md:order-2
            my-4 md:mt-0
            md:w-1/2 xl:w-1/3
        ">
        </div>
        <Logo class="
            w-full
            order-2 md:order-1
            md:pr-4
            md:w-1/2 xl:w-2/3
        "></Logo>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Logo from "@/components/Logo";
import {useRouter} from "vue-router";



export default {
  name: 'ContactView',
  components: {
    Logo,

  },
  setup() {
    const selectedProblem = ref('')
    let onProblemSelect = problem => selectedProblem.value = problem
    const router = useRouter()
    const goToMap = () => {
        router.push('/map')
      }

    return {
      goToMap,
      onProblemSelect,
      selectedProblem
    }
  }
}
</script>
