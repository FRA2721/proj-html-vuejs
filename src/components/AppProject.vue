<script>

export default{
    name: "AppProject",

    data(){
        return{
            cardsList:[
                {
                    src: "DRY-1-790x592.jpg",
                    mouse: false
                },

                {
                    src: "221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg",
                    mouse: false
                },

                {
                    src: "z1el4c4p-790x592.jpg",
                    mouse: false
                }
            ]
        }
    },
    methods:{

        getImgsPositionRight: function(){
            const result = new Array(3);

            for (let i = this.cardsList.length - 1; i > -1; i--){
                if (i === 0){
                     result[result.length - 1] = this.cardsList[i];
                }else {
                    result[i - 1] = this.cardsList[i];
                }
            }
            // console.log("array start",this.cardsList);
            // console.log("end array", result);
            this.cardsList = result;
        },

        getImgsPositionLeft: function(){
            const result = new Array(3);

            for (let i = 0; i < this.cardsList.length; i++){
                if(i === this.cardsList.length - 1){
                    result[0] = this.cardsList[this.cardsList.length - 1];
                }else {
                    result[i + 1] = this.cardsList[i];
                }
            }
            // console.log(result);
            // console.log(this.cardsList);
            this.cardsList = result;
        },

        changeMouse: function(item){
            item.mouse = true;
        },

        deleteMouse: function(item){
            item.mouse = false;
        },

        getImgsPath: function(url){
            return new URL(url, import.meta.url).href
        }
    }
}
</script>

<template>
    <section>
        <div class="project">
            <h2 class="pseudo">PROJECT</h2>

            <div class="move-slider">
                <h3>OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h3>
                <ul>
                    <li @click="getImgsPositionLeft"><i class="fa-solid fa-arrow-left-long"></i></li>
                    <li @click="getImgsPositionRight"><i class="fa-solid fa-arrow-right"></i></li>
                </ul>
            </div>

            <div class="slider">
                <div class="card" v-for="(item, index) in cardsList" @mouseenter="changeMouse(item)" @mouseleave="deleteMouse(item)">
                    <img :src="getImgsPath(`../assets/imgs/${item.src}`)" alt="">

                    <div class="card-text" :class="!item.mouse ? 'none': ''">
                        <div class="text">
                            <h3>Purinky Products</h3>
                            <p>uncategorized</p>
                        </div>
                        <a href=""><i class="fa-solid fa-plus"></i></a>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>

<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

.project{
    width: 80%;
    margin: 0 auto;

    h2{
        padding: 6rem 0 1.5rem 0;
        color: $text;
        
        &::before{
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            margin-right: 10px;
        }

    }
    
    .move-slider{
        display: flex;
        justify-content: space-between;

        h3{
            color: $text;
        }

        ul{
            display: flex;

            li{
                width: 30px;
                height: 30px;
                background-color: #3d3d3d6a;
                color: white;
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
        
        .card{
            position: relative;
            border: 5px solid transparent;
            transition-duration: 1s;

            &:hover{
                border: 5px solid white;
            }

            img{
                width: 380px;
            }
            .card-text{
                display: flex;
                justify-content: space-between;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                bottom: 0px;
                background-color: rgba(148, 5, 5, 0.6);
                align-items: end;
                padding-left: 1rem;
                padding-bottom: 1rem;

                a{
                    display: inline;
                    width: 30px;
                    height: 30px;
                    background-color: #1f1e38;
                    color: white;
                    margin-right: 1rem;
                    line-height: 30px;
                    text-align: center;
                }

                h3{
                    color: $text;
                }

                p{
                    color: $paragraph;
                    opacity: .5 ;
                }
            }

            .card-text.none{
                visibility: hidden;
            }

        }
    }

}

</style>