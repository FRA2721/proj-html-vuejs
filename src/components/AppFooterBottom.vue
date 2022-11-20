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
}

</style>