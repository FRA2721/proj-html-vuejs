<!-- script section -->
<script>

export default{
    // name
    name:"AppAboutUs",

    data(){
        return{

        }
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>
    <!-- container -->
    <div class="container">

        <!-- about us section -->
        <section class="about-us-section " id="about">

            <!-- img -->
            <div class="about-us">
                <img src="../assets/imgs/business-people-working-together-on-project-and-5FHSKBL.jpg" alt="people talking">
            </div>
            <!-- /img -->
    
            <!-- about us text -->
            <div class="about-us-text">

                <!-- container text -->
                <div class="container-text">
                    <h2 class="pseudo">ABOUT US</h2>
                    <h3>WE MAKE YOUR STRATEGY WORK</h3>
                    <p>When while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed by when i hear the buzz of the title world among the stalks, and grow familiar indescribable forms of the insects, and flies, then i feel the presence of the Almighty.</p>
                </div>
                <!-- /container text -->

            </div>
            <!-- /about us text -->
            
        </section>
        <!-- /about us section -->
    
        <!-- help section -->
        <section class="help-section green-btn" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">

            <!-- help -->
            <div class="help">
                <h2>WE HELP TO DELIVER THE BUSINESS CASE</h2>
                <p>When while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow.</p>
            </div>
            <!-- /help -->

            <a href="#" class="btn get-started-btn red-btn">GET STARTED</a>
        </section>
        <!-- /help section -->

    </div>
    <!-- /container -->

</template>
<!-- /template section -->




<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// about us formatting section
.about-us-section{
    display: flex;

    // about us formatting
    .about-us{
        width: 50%;
        height: 500px;
        display: flex;
    
        // image formatting section
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    
    }

    // about us text formatting section
    .about-us-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        padding-left: 6rem;

        // container text formatting section
        .container-text{
            width: 50%;
        }

        // h2 tipography
        h2{
            color: $text;
            font-size: .8rem;

            // pseudo
            &::before{
                content:"";
                display: inline-block;
                width: 33px;
                height: 3px;
                margin-right: 10px;
            }
        }

        // h3 tipography
        h3{
            padding: 1.5rem 0;
            color: $text;
            font-size: 2rem;
        }

        // p
        p{
            color: $paragraph;
        }
    }
    
}

// help section formatting
.help-section{
    position: relative;
    width: 90%;

    // anchor formatting section
    a{
        position: absolute;
        bottom: 0px;
        right: 0px;
        color: $text;
    }

    // help formatting section
    .help{
        width: 60%;
        display: flex;
        margin: 0 auto;
        
        // h2, p tipography
        h2, p{
            padding: 3rem 2rem;
            color: #1f1e38;
        }
        
        // p
        p{
            width: 60%;
        }
    }
}

</style>
<!-- /style section -->