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
    ]
})
