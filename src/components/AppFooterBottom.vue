<!-- script section -->
<script>

export default{
    // name
    name: "AppFooterBottom",

    data(){
            return{
        }
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>
    <!-- section -->
    <section>

        <!-- footer bottom -->
        <div class="footer-bottom">

            <!-- terms -->
            <div class="terms">
                <p>Terms of use</p>
                <p>Privacy Environment Policy</p>
            </div>
            <!-- /terms -->

            <!-- copyright -->
            <div class="copyright">
                <p>Copyright @ 2020 Phlox Consulting. All Rights Reserved.</p>
                <i class="fa-solid fa-arrow-up"></i>
                <i class="fa-regular fa-message"></i>
            </div>
            <!-- /copyright -->

        </div>
        <!-- /footer bottom -->

    </section>
    <!-- /section -->
</template>
<!-- /template section -->



<!-- style section -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// section formatting
section{

    // footer bottom formatting section
    .footer-bottom{
        width: 83%;
        padding: 3rem 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-top: 3px solid rgb(156, 156, 156);
    }

    // copyright formatting section
    .copyright{
        display: flex;
        align-items: center;

        // icons formatting section
        i{
            display: inline-block;
        }

        // arrow up formatting section
        .fa-arrow-up{
            background-color: white;
            border: 1px solid black;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-left: 10px;
        }

        // message formatting gsection
        .fa-message{
            background-color: #527ceb;
            color: white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            margin-left: 10px;
        }
    }

    // p
    p{
        color: $text;
        opacity: .5;
    }
}

</style>
<!-- /style section -->