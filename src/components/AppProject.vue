<!-- script section -->
<script>

export default{
    // name
    name: "AppProject",

    data(){
        return{
            // array
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
    // methods
    methods:{

        // position right method
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

        // position left method
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

        // change mouse method
        changeMouse: function(item){
            item.mouse = true;
        },

        // delete mouse method
        deleteMouse: function(item){
            item.mouse = false;
        },

        // images path method
        getImgsPath: function(url){
            return new URL(url, import.meta.url).href
        }
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>
    <!-- section -->
    <section id="projects">

        <!-- project container -->
        <div class="project">
            <h2 class="pseudo">PROJECT</h2>

            <!-- move slider block -->
            <div class="move-slider">
                <h3>OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h3>
                <ul>
                    <li @click="getImgsPositionLeft"><i class="fa-solid fa-arrow-left-long"></i></li>
                    <li @click="getImgsPositionRight"><i class="fa-solid fa-arrow-right"></i></li>
                </ul>
            </div>
            <!-- /move slider block -->

            <!-- slider block -->
            <div class="slider">

                <!-- general card -->
                <div class="card" v-for="(item, index) in cardsList" @mouseenter="changeMouse(item)" @mouseleave="deleteMouse(item)">
                    <img :src="getImgsPath(`../assets/imgs/${item.src}`)" alt="">

                    <!-- general card text -->
                    <div class="card-text" :class="!item.mouse ? 'none': ''">
                        <div class="text">
                            <h3>Purinky Products</h3>
                            <p>uncategorized</p>
                        </div>
                        <a href=""><i class="fa-solid fa-plus"></i></a>
                    </div>
                    <!-- /general card text -->

                </div>
                <!-- /general card -->

            </div> 
            <!-- /slider block -->

        </div>
        <!-- /project container -->

    </section>
    <!-- /section -->
</template>
<!-- /template section -->



<!-- style section -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// project formatting section
.project{
    width: 80%;
    margin: 0 auto;

    // h2 tipography
    h2{
        padding: 6rem 0 1.5rem 0;
        color: $text;
        
        // pseudo
        &::before{
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            margin-right: 10px;
        }

    }
    
    // move slider formatting section
    .move-slider{
        display: flex;
        justify-content: space-between;

        // h3 tipography
        h3{
            color: $text;
        }

        // list formatting section
        ul{
            display: flex;

            // list items
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

    // slider formatting section
    .slider{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        
        // card formatting section
        .card{
            position: relative;
            border: 5px solid transparent;
            border-radius: 33px;
            transition-duration: 1s;

            &:hover{
                border: 5px solid white;
                border-radius: 33px;
            }

            // images formatting section
            img{
                width: 380px;
                border-radius: 33px;
            }

            // card text formatting section
            .card-text{
                display: flex;
                justify-content: space-between;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                bottom: 0px;
                background-color: rgb(248, 29, 57, .5);
                align-items: end;
                padding-left: 1rem;
                padding-bottom: 1rem;
                border-radius: 33px;

                // anchor formatting section 
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

                // h3 tipography
                h3{
                    color: $text;
                }

                // p
                p{
                    color: $paragraph;
                    opacity: .5 ;
                }
            }

            // none formatting section
            .card-text.none{
                visibility: hidden;
            }

        }
    }

}

</style>
<!-- /style section -->