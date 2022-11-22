<!-- script section -->
<script>

export default{
    // name
    name: "AppTalkAboutWork",

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
        <h2>LET'S TALK ABOUT WORK</h2>
        <p>Francesco Cimino classe 73 BOOLEAN, test for paragraph section.. bla bla bla bla...</p>
        <a href="#" class="btn get-started-btn grey-btn">GET STARTED</a>
    </section>
    <!-- /section -->
</template>
<!-- /tempalte section -->



<!-- style section -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// section formatting
section{
    padding: 7rem 0;
    margin-top: 5rem;
    background-image: url('../assets/imgs/business-people-working-together-on-project-and-B3MZ4TX.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $text;
}
</style>
<!-- /style -->