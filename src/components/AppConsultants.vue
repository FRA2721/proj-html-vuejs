<script>
import { store } from '../store.js'

export default{
    name: "AppConsultants",

    data(){
        return{
            // store data
            store
        }
    }
}
</script>




<template>
    <section>
        <h2>OUR CONSULTANTS CAN HELP YOU</h2>
        <div class="container">
            <div class="box" v-for="(item, index) in store.consultansLinks">
                <div class="icon">
                    <a href="#"><i :class="item.icon"></i></a>
                </div>

                <div class="description">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                </div>
            </div>
        </div>
    </section>
</template>




<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

h2{
    position: relative;
    margin: 0 auto;
    padding: 5rem 0 5rem 0;
    padding-left: 17%;

    &::after{
        content:"";
        position: absolute;
        top: 50%;
        right: 0px;
        display: inline-block;
        width: calc(100% - 720px);
        height: 3px;
        background-color: green;
        margin-left: 10px;
    }
}
.container{
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;

    .box{
        display: flex;
        width: 45%;
        margin-bottom: 100px;

        .icon a{
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 1px solid black;
            border-radius: 50%;
            line-height: 50px;
            text-align: center;
            background-color: red;
        }
        .description{ 
            padding: 0 20px;

            p{
                margin-top: 20px;
            }
        }
    }

}
</style>