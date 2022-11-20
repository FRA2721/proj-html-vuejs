<!-- script section -->
<script>

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
    <footer>
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