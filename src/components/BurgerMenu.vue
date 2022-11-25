<template>
  <nav class="py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link :to="homeRoute">
        <img src="../../public/logo.png" class="h-12 sm:h-16"/>
      </router-link>

      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div class="flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <router-link
              v-for="route in navItems"
              :key="route.name"
              :to="route"
              class="block py-2 pl-4 text-lg font-semibold"
              :class="{
                'text-inherit': activeRouteName !== route.name,
                'text-active': activeRouteName === route.name,
              }"
              aria-current="page"
          >
            {{ route.name }}
          </router-link>

        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import {routes} from '../router/index'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
name: "BurgerMenu",
  setup() {
  const route = useRoute()
  const activeRouteName = computed(() => {
    let name = ''
    if (routes.find) name = routes.find(r => r.name === route.name)?.name ?? ''
    return name
  })
    const homeRoute = routes[0]
    const navItems = routes.filter((r, i) => i)
    return {
      activeRouteName,
      homeRoute,
      navItems,
    }
  }
}
</script>

<style scoped>

</style>
