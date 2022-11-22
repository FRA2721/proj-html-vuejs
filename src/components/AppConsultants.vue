<!-- script section -->
<script>

// import store data
import { store } from '../store.js'

export default{
    // name
    name: "AppConsultants",

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
    <!-- section -->
    <section data-aos="fade-left" data-aos-easing= "linear" data-aos-duration= "1500">
        <h2 class="pseudo">OUR CONSULTANTS CAN HELP YOU</h2>

        <!-- container -->
        <div class="container">

            <!-- box -->
            <div class="box" v-for="(item, index) in store.consultansLinks" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">

                <!-- icon -->
                <div class="icon">
                    <a href="#"><i :class="item.icon"></i></a>
                </div>
                <!-- /icon -->

                <!-- description -->
                <div class="description">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                </div>
                <!-- /description -->

            </div>
            <!-- /box -->

        </div>
        <!-- /container -->

    </section>
    <!-- /section -->
</template>
<!-- /tempalte section -->



<!-- style section -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// section formatting
section{
    background-color: white;

    // h2 tipography
    h2{
        position: relative;
        margin: 0 auto;
        padding: 5rem 0 5rem 0;
        padding-left: 17%;
        color: #1f1e38;
    
        // pseudo
        &::after{
            content:"";
            position: absolute;
            top: 50%;
            right: 0px;
            display: inline-block;
            width: calc(100% - 720px);
            height: 3px;
            margin-left: 10px;
        }
    }

    // container formatting section
    .container{
        width: 65%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem 0;
    
        // box formatting section
        .box{
            display: flex;
            width: 45%;
            margin-bottom: 100px;
    
            // anchors formatting section
            .icon a{
                display: inline-block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                line-height: 50px;
                text-align: center;
                background-color: $icon-consultants-color;
                color: white;
            }

            // description formatting section
            .description{   
                padding: 0 20px;

                // h3 tipography                
                h3{
                    color: #1f1e38;
                }
                
                // p
                p{
                    margin-top: 20px;
                    color: #aaaaaa;
                }
            }
        }

    }
}
</style>
<!-- /style section -->