import vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
import Link from "@/components/link.vue"
import Login from "@/components/login.vue"
import Registrasi from "@/components/register.vue"
import Navbar from "@/components/Navbar.vue"

vue.use(Router)

function configRouters() {
    return [
        {
            path:'/',
            name:'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/login',
            name:'Login',
            component: Login
        },
        {
            path:'/register',
            name:'Registrasi',
            component: Registrasi
        },
        {
            path:'/link',
            name:'Link',
            component: Link
        },
        {
            path:'/navbar',
            name:'Navbar',
            component: Navbar

        }
    ]
}


const link = new Router({
    mode: "history",
    routes: configRouters(),
});
export default link;