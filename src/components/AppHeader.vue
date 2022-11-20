<script>
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



<template>
    <header>
        <nav class="nav-bar">
            <div class="logo">
                <img src="../assets/imgs/logotype.png" alt="Phlox logo image">
            </div>
            
            <ul>
                <li v-for="( item, index ) in store.navigationLinks">
                    <a :href="item.href">{{ item.voice }}</a>
                </li>
            </ul>
        </nav>
    
        <div class="jumbotron">
            <div class="jumbotron-container">
                <h3>ALWATS THE BEST WAY YOU NEED IT</h3>
                <h1>THE BEST<br>BUSINESS<br>CONSULTING</h1>
                <a href="#" class="btn read-more-btn">READ MORE</a>
                <a href="#" class="play-btn"><i class="fa-solid fa-play"></i></a>
            </div>
        </div>
    </header>

</template>



<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

nav{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;

    ul{
        display: flex;

        li{
            padding: 1rem;
            color: $header-text;
            opacity: .5;
            transition-duration: .5s;

            &:hover{
                opacity: 1;
                border-top: 3px solid white;
            }
        }
    }

    .logo{
        padding: 1rem;

        img{
            width: 100px;
        }
    }

}

header{
    background: linear-gradient( 
        to right,
        blue 30%, 
        red 10%);
}
.jumbotron{
    padding: 10rem 0;
    
    .jumbotron-container{
        width: 80%;
        margin: 0 auto;

        h3::before{
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            background-color: green;
            margin-right: 10px;
        }

        h1{
            font-size: 3.5rem;
        }

        .play-btn{
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 1.5px solid white;
            border-radius: 50px;
            text-align: center;
            line-height: 50px;
            margin-left: 50px;
            i{
                color: aqua;
            }
        }
    }
}

</style>