<!-- script section -->
<script>

export default{

    // name
    name: "AppTestimonial",

    data(){
        return{
            // array
            testimonialList: [
                {
                    title: "Vera Duncan",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid",
                    link: "oliver-ragfelt-488196-2.jpg",
                    mouse:false

                },
                
                {
                    title: "Francesco Cimino",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid",
                    link: "oliver-ragfelt-488196-unsplash.jpg",
                    mouse:false
                },

                {
                    title: "Michael Black",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid",
                    link: "12679.jpg",
                    mouse:false
                }
            ]
        }
    },
    // methods
    methods:{

        // change mouse method
        changeMouse: function(item){
            // item.mouse = true;
            // this.mouse = true;
            console.log("ok");
            console.log(item.title);
            console.log(item.mouse);
            item.mouse = true;
            console.log(item.mouse);
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



<!-- tempalte section -->
<template>
    <!-- section -->
    <section>

        <!-- testimonial title block -->
        <div class="testimonial-title">
            <h2 class="pseudo">TESTIMONIAL</h2>
            <h3>WHAT'S THE CUSTOMER SAY<br> ABOUT OUR WORK</h3>
        </div>
        <!-- /testimonial title block -->

        <!-- testimonial list block -->
        <div class="testimonial-list" data-aos="zoom-in-left" data-aos-duration="3000">
            <div class="testimonial" v-for="(item, index) in testimonialList" @mouseenter="changeMouse(item)" @mouseleave="deleteMouse(item)" :class="item.mouse ? `background-${index + 1}`: ''">
                <p>{{ item.description }}</p>
                <h4>{{ item.title }}</h4>
                <h5>Amazon inc.</h5>
            </div>
        </div>
        <!-- /testimonial list block -->

    </section>
    <!-- /section -->
</template>
<!-- /tempalte section -->



<!-- style -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// section formatting
section{

    // testimonial title formatting section
    .testimonial-title{
        width: 80%;
        margin: 0 auto;
    
        // h2 tipography
        h2{
            text-align: center;
            padding: 6rem 0 1rem 0;
            position: relative;
    
            // pseudo
            &::after{
                content:"";
                display: inline-block;
                width: 33px;
                height: 3px;
                margin-right: 10px;
                position: absolute;
                right: 0px;
                bottom: 30px;
            }
        }
    
        // h3 tipography
        h3{
            text-align: right;
            font-size: 3rem;
        }

        // h2, h3 tipography
        h2, h3{
            color: $text;
        }

    }

    // testimonial list formatting section

    .testimonial-list{
        background-color: white;
        display: flex;
        width: 90%;
        margin-left: auto;
        margin-top: 1.5rem;
        padding-right: 10rem;

        // testimonial
        .testimonial{
            width: 33%;
            height: 50%;
            padding: 3.5rem 3rem;
            border: 10px solid white;
            transition-duration: 1s;
        }

        // p
        p{
            margin-bottom: 2rem;
            color: $paragraph;
        }

        // h4 tipography
        h4{
            margin-bottom: .5rem;
            color: #1f1e38;
        }

        // h5 tipography
        h5{
            color: #aaaaaa;
        }

    }

    // testimonial background formatting section
    // background 1
    .testimonial.background-1{
        background-image: url('../assets/imgs/oliver-ragfelt-488196-2.jpg');
        object-fit: cover;
        background-position: center;
        border: 10px solid rgb(201, 189, 189);
        border-right: 10px solid white;
        background-position: bottom;

        &:hover{
            background-position: center;
        }
    }

    // background 2
    .testimonial.background-2{
        background-image: url('../assets/imgs/oliver-ragfelt-488196-unsplash.jpg');
        object-fit: cover;
        border: 10px solid rgb(201, 189, 189);
        border-right: 10px solid white;
        background-position: bottom;

        &:hover{
            background-position: center;
        }
    }

    // background 3
    .testimonial.background-3{
        background-image: url('../assets/imgs/12679.jpg');
        object-fit: cover;
        border: 10px solid rgb(201, 189, 189);
        border-right: 10px solid white;
        background-position: bottom;
        
        &:hover{
            background-position: center;
        }
    }
        
}

</style>
<!-- /style -->