<script>

export default{
    name: "AppFooterTop",

    data(){
        return{
            footerLinks: [
                // link 1 store data:
                {
                    voice: "HOME",
                    href: "#home"
                },

                // link 2 store data:
                {
                    voice: "ABOUT",
                    href: "#about"
                },

                // link 3 store data:
                {
                    voice: "PROJECTS",
                    href: "#projects"
                },

                // link 4 store data:
                {
                    voice: "SERVICES",
                    href: "#services"
                },

                // link 5 store data:
                {
                    voice: "BLOG",
                    href: "#blog"
                },

                // link 6 store data:
                {
                    voice: "CONTACT",
                    href: "#contact"
                }
            ],
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

<template>
    <section>
        <div class="footer-top">
            <div class="footer-logo">
                <img src="../assets/imgs/logotype-2-139x23.png" alt="Phlox footer logo image">
            </div>
            <ul class="links">
                <li v-for="(item, index) in footerLinks" class="links-voices">
                    <a :href="item.href">{{ item.voice }}</a>
                </li>
            </ul>

            <ul class="social">
                <li v-for="(item, index) in socialIcons">
                    <a href="#"><i :class="item"></i></a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

section{
    background-color: blue;

    .footer-top{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 4rem;

        ul{
            display: flex;
            
            li{
                margin-left: 1rem;
                color: white;
                opacity: .5;
                transition-duration: .5s;
                padding-bottom: 1rem;
                border-bottom: 3px solid blue;

                &:hover{
                    opacity: 1;
                }

            }
        }
        .links-voices{
            transition-duration: .5s;
            
            &:hover{
                border-bottom: 3px solid white;
            }
        }
    }
}
</style>