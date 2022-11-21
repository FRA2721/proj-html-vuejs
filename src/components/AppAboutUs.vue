<script>
export default{
    name:"AppAboutUs",

    data(){
        return{

        }
    }
}
</script>




<template>
    <div class="prova">
        <section class="about-us-section">
            <div class="about-us">
                <img src="../assets/imgs/business-people-working-together-on-project-and-5FHSKBL.jpg" alt="">
            </div>
    
    
            <div class="about-us-text">
                <div class="container-text">
                    <h2 class="pseudo">ABOUT US</h2>
                    <h3>WE MAKE YOUR STRATEGY WORK</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid</p>
                </div>
            </div>
            
        </section>
    
        <section class="help-section green-btn">
            <div class="help">
                <h2>WE HELP TO DELIVER THE BUSINESS CASE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid</p>
            </div>
            <a href="#" class="btn get-started-btn red-btn">GET STARTED</a>
        </section>
    </div>

</template>




<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

.about-us-section{

    display: flex;
    .about-us{
        width: 50%;
        height: 500px;
        display: flex;
    
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    
    }
    .about-us-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        padding-left: 6rem;

        .container-text{
            width: 50%;
        }

        h2{
            color: $text;
        }

        h3{
            padding: 1.5rem 0;
            color: $text;
        }

        p{
            color: $paragraph;
        }

        h2::before{
            content:"";
            display: inline-block;
            width: 33px;
            height: 3px;
            margin-right: 10px;
        }
    }
    
}

.help-section{
    position: relative;
    width: 90%;

    a{
        position: absolute;
        bottom: 0px;
        right: 0px;
        color: $text;
    }
    .help{
        width: 60%;
        display: flex;
        margin: 0 auto;

        p{
            width: 60%;
        }

        h2, p{
            padding: 3rem 2rem;
        }
    }
}

</style>