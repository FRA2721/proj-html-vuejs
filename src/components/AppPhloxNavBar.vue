<!-- script section -->
<script>
export default{
    // name
    name: "AppPhloxNavBar",
    props: {
        // array for dinamycs links
        links: Array
    }
}
</script>
<!-- /script section -->



<!-- tempalte section -->
<template>
    
    <!-- phlox navbar section -->
    <nav class="phlox-navbar">

        <!-- navbar container -->
        <div class="justify-content-center justify-content-lg-between">

            <!-- logo section -->
            <a class="phlox-navbar-log">
                <img src="../assets/imgs/logotype.png" alt="Phlox logo image">
            </a>
            <!-- /logo section -->

            <!-- dinamycs links list -->
            <ul class="phlox-navbar-link mt-3 mt-lg-3">
                <li v-for="(link,index) in links" :key="index">
                    <a 
                        :href="link.href"
                    >
                        {{link.voice}}
                    </a>
                </li>
            </ul>
            <!-- /dinamycs links list -->
        </div>
        <!-- /navbar container -->
    </nav>
    <!-- /phlox navbar section -->

</template>
<!-- /tempalte section -->

<!-- style section -->
<style lang="scss" scoped>
// variables
@use "../styles/partials/variables" as *;
.phlox-navbar{

    img{
        width: 100px;
    }
    .phlox-navbar-link{
        display: flex;
        margin: 0;

        li{
            margin: 0 1em;

            a{
                opacity: .5;
                color: $header-links;
                transition-duration: .5s;
            
                 &:hover{
                    opacity: 1;
                    border-top: 3px solid $border-colors;
                }
            }
        }
    }
}
</style>
<!-- /style section -->