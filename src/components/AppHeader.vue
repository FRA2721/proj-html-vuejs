<!-- script section -->
<script>

// import components
import AppPhloxNavBar from './AppPhloxNavBar.vue';
import AppPhloxJumbotron from './AppPhloxJumbotron.vue';
import { store } from "../store";

export default{
    // name
    name: "AppHeader",
    components:{
        AppPhloxNavBar,
        AppPhloxJumbotron
    },
    data(){
        return{
            // store data
            store
        }
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>

    <!-- header -->
    <header>
        <!-- container -->
        <div class="container">
            <AppPhloxNavBar :links="store.headerLinksNavBar"/>
            <AppPhloxJumbotron />
        </div>
        <!-- /container -->
    </header>
    <!-- /header -->

</template>
<!-- /tempalte section -->



<!-- style section -->
<style lang="scss" scoped>
</style>
<!-- /style section -->