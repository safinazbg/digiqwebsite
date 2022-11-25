<template>
  <div class="app h-view">
    <div class="content h-full md:container mx-auto px-20 text-lg text-textColor">
      <nav>
        <BurgerMenu></BurgerMenu>
      </nav>
      <router-view class="h-full"/>
    </div>
  </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu";

export default {
  name: "App",
  components: {
    BurgerMenu
  }
}
</script>

<style>

</style>
