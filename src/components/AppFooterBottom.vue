<script>

export default{
    name: "AppFooterBottom",

    data(){
            return{
        }
    }
}
</script>

<template>
    <section>
        <div class="footer-bottom">
            <div class="terms">
                <p>Terms of use</p>
                <p>Privacy Environment Policy</p>
            </div>

            <div class="copyright">
                <p>Copyright @ 2020 Phlox Consulting. All Rights Reserved.</p>
                <i class="fa-solid fa-arrow-up"></i>
                <i class="fa-regular fa-message"></i>
            </div>
        </div>
    </section>
</template>

<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

section{
    .footer-bottom{
        width: 83%;
        padding: 3rem 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-top: 3px solid rgb(156, 156, 156);
    }

    .copyright{
        display: flex;
        align-items: center;

        i{
            display: inline-block;
        }
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

    p{
        color: $text;
        opacity: .5;
    }
}

</style>