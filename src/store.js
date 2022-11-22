// store data code
import { reactive } from "vue";

// // store data for dinamycs links
export const store = reactive({

    // navigation links header section store data
    navigationLinks: [

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

    // consultans links section store data
    consultansLinks:[

        {
            title: "STATISTICAL CONSULTING",
            subtitle:"When while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed by when i hear the buzz of the title.",
            icon: "fa-solid fa-chart-line"
        },
        
        {
            title: "DIGITAL CONSULTING",
            subtitle: "When while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed by when i hear the buzz of the title.",
            icon: "fa-solid fa-bullhorn"
        },
        
        {
            title:"BANKING CONSULTING",
            subtitle: "When while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed by when i hear the buzz of the title.",
            icon: "fa-solid fa-wallet"
        },
        
        {
            title:"ENTERPRICE CONSULTING",
            subtitle: "When while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed by when i hear the buzz of the title.",
            icon: "fa-solid fa-bullseye"
        }

    ]
})
