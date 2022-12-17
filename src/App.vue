<template>
  <div class="app h-view">
    <LTrianglify>
      <template #body>
        <div class="content h-full md:container mx-auto px-20 text-lg text-textColor">
          <nav>
            <BurgerMenu></BurgerMenu>
          </nav>
          <div class="text-blue-900">
          <hr>
          </div>
          <router-view class="h-full"/>
        </div>
      </template>
    </LTrianglify>
  </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu";
import LTrianglify from "@/components/layout/LTrianglify";

export default {
  name: "App",
  components: {
    BurgerMenu,
    LTrianglify,
  }
}
</script>

<style>

</style>
