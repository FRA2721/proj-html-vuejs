<!-- developer: Francesco Cimino; -->
<!-- project: Phlox the best business consulting; -->

<!-- script section -->
<script>

// import macro components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>

<!-- header section -->
  <header>
    <AppHeader />
  </header>
  <!-- /header-section -->

  <!-- main section -->
  <main>
    <AppMain />
  </main>
  <!-- /main section -->

  <!-- footer section -->
  <footer>
    <AppFooter />
  </footer>
  <!-- footer section -->

</template>
<!-- /template section -->



<!-- style section -->
<style lang="scss">
// scss
@use "./styles/general.scss" as *;
</style>
<!-- /style section -->