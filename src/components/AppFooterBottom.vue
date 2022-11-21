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
    background-color: blue;

    .footer-bottom{
        width: 90%;
        padding: 4rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
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
    }
}

</style>