<!-- script section -->
<script>
import AppConsultants from './AppConsultants.vue';
import AppAboutUs from './AppAboutUs.vue';
import AppProject from './AppProject.vue';
import AppTestimonial from './AppTestimonial.vue';
import AppBlog from './AppBlog.vue';
import AppTalkAboutWork from './AppTalkAboutWork.vue';

export default{
    // name
    name: "AppMain",

    components:{
        AppConsultants,
        AppAboutUs,
        AppProject,
        AppTestimonial,
        AppBlog,
        AppTalkAboutWork
        
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
        <AppTestimonial />
        <AppBlog />
        <AppTalkAboutWork />
    </main>
    <!-- /main section -->

</template>
<!-- /template section -->

<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->