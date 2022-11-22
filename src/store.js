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
            subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-solid fa-chart-line"
        },
        
        {
            title: "DIGITAL CONSULTING",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-solid fa-bullhorn"
        },
        
        {
            title:"BANKING CONSULTING",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-solid fa-wallet"
        },
        
        {
            title:"ENTERPRICE CONSULTING",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-solid fa-bullseye"
        }

    ]
})
