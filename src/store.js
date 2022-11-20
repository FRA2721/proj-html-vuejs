// store-code-data
import { reactive } from "vue";

// store-data-for-dinamyc-links
export const store = reactive({
    navigationLinks: [

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

    consultansLinks:[

        {
            title: "STATISTICAL CONSULTING",
            subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-solid fa-chart-line"
        },
        
        {
            title: "DIGITAL CONSULTING",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon:"fa-regular fa-volume-high"
        },
        
        {
            title:"BANKING CONSULTING",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-solid fa-wallet"
        },
        
        {
            title:"ENTERPRICE CONSULTING",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam ipsam facere a eligendi dolorum necessitatibus aliquam autem quas expedita. Corrupti, nobis. Corrupti in amet blanditiis quibusdam vel id aliquid.",
            icon: "fa-regular fa-bullseye"
        }

    ]
})
