<script>

export default{
    name: "AppProject",

    data(){
        return{
            cardsList:[
                "DRY-1-790x592.jpg",
                "221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg", 
                "z1el4c4p-790x592.jpg"
            ]
        }
    },
    methods:{
        getImgsPath: function(url){
            return new URL(url, import.meta.url).href
        }
    }
}
</script>

<template>
    <section>
        <div class="project">
            <h2>PROJECT</h2>

            <div class="move-slider">
                <h3>OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h3>
                <ul>
                    <li><i class="fa-solid fa-arrow-left-long"></i></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                </ul>
            </div>

            <div class="slider">
                <div class="card" v-for="(item, index) in cardsList">
                    <img :src="getImgsPath(`../assets/imgs/${item}`)" alt="">
                </div>
            </div> 
        </div>
    </section>
</template>

<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

section{
    background-color: blue;
}
.project{
    width: 80%;
    margin: 0 auto;

    h2{
        padding: 6rem 0 1.5rem 0;
        
        &::before{
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            background-color: green;
            margin-right: 10px;
        }

    }
    
    .move-slider{
        display: flex;
        justify-content: space-between;

        ul{
            display: flex;

            li{
                width: 30px;
                height: 30px;
                border: 1px solid black;
                background-color: grey;
                line-height: 30px;
                text-align: center;

                &:first-child{
                    margin-right: 5px;
                }
            }
        }
    }

    .slider{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

        img{
            width: 380px;
        }
    }

}

</style>