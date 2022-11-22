<!-- script section -->
<script>

// import footer App components 
import AppFooterTop from './AppFooterTop.vue';
import AppFooterBottom from './AppFooterBottom.vue';

export default{
    // name
    name: "AppFooter",
    components: { AppFooterTop, AppFooterBottom }
}
</script>
<!-- /script section -->



<!-- tempalte section -->
<template>

    <!-- footer -->
    <footer id="contact">
        <AppFooterTop />
        <AppFooterBottom />
    </footer>
    <!-- /footer -->

</template>
<!-- /template section -->



<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->