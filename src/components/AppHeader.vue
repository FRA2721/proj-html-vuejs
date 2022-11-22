<!-- script section  -->
<script>

// import store data code
import { store } from '../store.js'

export default{
    // name
    name: "AppHeader",

    data(){
        return{
            // store data
            store
        }
    }
}
</script>
<!-- /script section -->



<!-- tempalte section -->
<template>

    <!-- header section -->
    <header data-aos="fade-right" data-aos-easing= "linear" data-aos-duration= "1500" id="home">
        <img src="../assets/imgs/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg" alt="consulting people" class="background-img">
        
        <!-- nav bar menu -->
        <nav class="nav-bar">

            <!-- logo -->
            <div class="logo">
                <img src="../assets/imgs/logotype.png" alt="Phlox logo image">
            </div>
            <!-- /logo -->
            
            <!-- links -->
            <ul>
                <li v-for="( item, index ) in store.navigationLinks">
                    <a :href="item.href">{{ item.voice }}</a>
                </li>
            </ul>
            <!-- /links -->

        </nav>
        <!-- /nav bar menu -->
    
        <!-- jumbotron section -->
        <div class="jumbotron">

            <!-- jumbotron container -->
            <div class="jumbotron-container">
                <h3 class="pseudo">ALWATS THE BEST WAY YOU NEED IT</h3>
                <h1>THE BEST<br>BUSINESS<br>CONSULTING</h1>
                <a href="#" class="btn read-more-btn green-btn">READ MORE</a>
                <a href="#" class="play-btn"><i class="fa-solid fa-play"></i></a>
            </div>
            <!-- /jumbotron container -->

        </div>
        <!-- /jumbotron section -->

    </header>
    <!-- /header section -->
</template>
<!-- /tempalte section -->



<!-- style section -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// nav formatting section
nav{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;

    // list formatting section
    ul{
        display: flex;

        // list items
        li{
            padding: 1rem;
            color: $text;
            opacity: .5;
            border-top: 3px solid transparent;
            transition-duration: .5s;

            &:hover{
                opacity: 1;
                border-top: 3px solid white;
            }
        }
    }

    // logo formatting section
    .logo{
        padding: 1rem;

        // img formatting section
        img{
            width: 100px;
        }
    }

}

// header formatting section
header{
    
    // background image formatting section
    .background-img{
        position: absolute;
        width: 70%;
        height: 720px;
        max-height: 100%;
        object-fit: cover;
        top: 0px;
        right: 0px;
        z-index: -999;
    }
}

// jumbotron formatting section
.jumbotron{
    padding: 10rem 0;
    
    // h3, h1 tipography
    h3, h1{
        color: $text;
    }
    
    // jumbotron container formatting section
    .jumbotron-container{
        width: 80%;
        margin: 0 auto;

        // pseudo
        h3::before{
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            margin-right: 10px;
        }

        // h1 tipography
        h1{
            font-size: 3.5rem;
        }

        // h3 tipography
        h3{
            font-size: .8rem;
        }

        // paly botton formatting section
        .play-btn{
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 1.5px solid white;
            border-radius: 50px;
            text-align: center;
            line-height: 45px;
            margin-left: 50px;
            
            // icon formatting section
            i{
                color: #39ffbf;
            }
        }
    }
}

</style>
<!-- /style section -->