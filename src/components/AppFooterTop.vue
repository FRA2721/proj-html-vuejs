<!-- script section -->
<script>

export default{
    // naame
    name: "AppFooterTop",

    data(){
        return{
            // array
            footerLinks: [
                {
                    voice: "HOME",
                    href: "#home"
                },

                {
                    voice: "ABOUT",
                    href: "#about"
                },

                {
                    voice: "PROJECTS",
                    href: "#projects"
                },

                {
                    voice: "SERVICES",
                    href: "#services"
                },

                {
                    voice: "BLOG",
                    href: "#blog"
                },

                {
                    voice: "CONTACT",
                    href: "#contact"
                }
            ],

            // array
            socialIcons: [
                "fa-brands fa-instagram",
                "fa-brands fa-linkedin",
                "fa-brands fa-facebook",
                "fa-brands fa-twitter"
            ]
        }
    }
}
</script>
<!-- /script section -->



<!-- template section -->
<template>
    <!-- section -->
    <section>

        <!-- footer top  -->
        <div class="footer-top">

            <!-- logo -->
            <div class="footer-logo">
                <a href="" id="home">
                    <img src="../assets/imgs/logotype-2-139x23.png" alt="Phlox footer logo image">
                </a>
            </div>
            <!-- /logo -->

            <!-- links -->
            <ul class="links">
                <li v-for="(item, index) in footerLinks" class="links-voices">
                    <a :href="item.href">{{ item.voice }}</a>
                </li>
            </ul>
            <!-- /links -->

            <!-- social -->
            <ul class="social">
                <li v-for="(item, index) in socialIcons">
                    <a href="#"><i :class="item"></i></a>
                </li>
            </ul>
            <!-- /social -->

        </div>
        <!-- /footer top -->

    </section>
    <!-- /section -->
</template>
<!-- /template section -->



<!-- style section -->
<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

// section formatting
section{
    .footer-top{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 4rem;

        // list formatting section
        ul{
            display: flex;
            
            // list items
            li{
                margin-left: 1rem;
                color: white;
                opacity: .5;
                transition-duration: .5s;
                padding-bottom: 1rem;
                border-bottom: 3px solid #1f1e38;

                &:hover{
                    opacity: 1;
                }

            }
        }

        // links voices formatting section
        .links-voices{
            transition-duration: .5s;
            
            &:hover{
                border-bottom: 3px solid white;
            }
        }
    }
}
</style>
<!-- /style section -->