<script>

export default{
    name: "AppTestimonial",

    data(){
        return{
            testimonialList: [
                {
                    title: "Vera Duncan",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid",
                    link: "oliver-ragfelt-488196-2.jpg"

                },
                
                {
                    title: "Francesco Cimino",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid",
                    link: "oliver-ragfelt-488196-unsplash.jpg"
                },

                {
                    title: "Michael Black",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid",
                    link: "12679.jpg"
                }
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
        <div class="testimonial-title">
            <h2>TESTIMONIAL</h2>
            <h3>WHAT'S THE CUSTOMER SAY<br> ABOUT OUR WORK</h3>
        </div>

        <div class="testimonial-list">
            <div class="testimonial" v-for="(item, index) in testimonialList">
                <p>{{ item.description }}</p>
                <h4>{{ item.title }}</h4>
                <h5>Amazon inc.</h5>
            </div>
        </div>
    </section>
</template>

<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

section{
    background-color: blue;
    .testimonial-title{
        width: 80%;
        margin: 0 auto;
    
        h2{
            text-align: center;
            padding: 6rem 0 1rem 0;
            position: relative;
    
            &::after{
                content:"";
                display: inline-block;
                width: 33px;
                height: 3px;
                background-color: green;
                margin-right: 10px;
                position: absolute;
                right: 0px;
                bottom: 30px;
            }
        }
    
        h3{
            text-align: right;
            font-size: 3rem;
        }

    }

    .testimonial-list{
        background-color: white;
        display: flex;
        width: 90%;
        margin-left: auto;
        margin-top: 1.5rem;
        padding-right: 10rem;

        .testimonial{
            width: 33%;
            padding: 2rem 3rem;
        }

        p{
            margin-bottom: 2rem;
        }

        h4{
            margin-bottom: .5rem;
        }

    }
        
}

</style>