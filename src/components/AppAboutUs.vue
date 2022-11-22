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
        <section class="about-us-section">

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid</p>
                </div>
                <!-- /container text -->

            </div>
            <!-- /about us text -->
            
        </section>
        <!-- /about us section -->
    
        <!-- help section -->
        <section class="help-section green-btn">

            <!-- help -->
            <div class="help">
                <h2>WE HELP TO DELIVER THE BUSINESS CASE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid</p>
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

        // p
        p{
            width: 60%;
        }

        // h2, p tipography
        h2, p{
            padding: 3rem 2rem;
        }
    }
}

</style>
<!-- /style section -->