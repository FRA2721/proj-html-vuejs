<!-- script section -->
<script>
import AppConsultants from './AppConsultants.vue';
import AppAboutUs from './AppAboutUs.vue';

export default{
    // name
    name: "AppMain",

    components:{
        AppConsultants,
        AppAboutUs,
    }
}
</script>
<!-- /script section -->



<!-- tempalte section -->
<template>
    
    <!-- main -->
    <main>
        <AppConsultants />
        <AppAboutUs />

    </main>
    <!-- /main section -->

</template>
<!-- /template section -->

<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->