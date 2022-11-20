<!-- script section -->
<script>
import AppConsultants from './AppConsultants.vue';
import AppAboutUs from './AppAboutUs.vue';
import AppProject from './AppProject.vue';

export default{
    // name
    name: "AppMain",

    components:{
    AppConsultants,
    AppAboutUs,
    AppProject
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
        <AppProject />
    </main>
    <!-- /main section -->

</template>
<!-- /template section -->

<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->