<script>

export default{
    name: "AppBlog",

    data(){
        return{
            blogListCards:[
                 "startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg",
                 "business-people-working-together-on-project-and-5FHSKBL-1390.jpg"
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
        <div class="blog">
            <h2>BLOG</h2>

            <div class="blog-title">
                <h3>THE RECENT NEWS YOU MUST READ IT</h3>
                <a href="#" class="btn view-all-btn">VIEW-ALL</a>
            </div>

            <div class="blog-cards">
                <div class="card" v-for="(item, index) in blogListCards">
                    <img :src="getImgsPath(`../assets/imgs/${item}`)" alt="">
                    <div class="description">
                        <h4>July 4, 2019 by Paul</h4>
                        <h2>Canadian Consulting Firm Acquired by UK Giant</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>

</template>

<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

section{
    .blog{
        width: 80%;
        margin: 0 auto;
        padding: 6rem 0 0 0;

        & > h2::before {
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            background-color: green;
            margin-right: 10px;

        }
        
        h2{
            padding: 1rem 0 1.5rem 0;
        }
        .blog-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .5rem 0 3rem 0 ;

            .view-all-btn{
                margin: 0;
            }
        }

        .blog-cards{
            display: flex;
            justify-content: space-between;
            
            .card{
                width: 45%;
                position: relative;

                img{
                    max-width: 100%;
                }
            }
            
            .description{
                width: 80%;
                background-color: white;
                position: absolute;
                bottom: -50px;
                right: 0px;
                padding: 2rem 3rem;

                h4{
                    color: red;
                }
            }
        }
    }
}

</style>