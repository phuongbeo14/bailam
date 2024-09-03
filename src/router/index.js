import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import { DefaultLayout } from "~/components/Layout"
import { DefaultLayout1 } from "~/components/Layout1"



const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/profile', component: Profile, layout: DefaultLayout1 }


]


const privateRoutes = [

]


export { publicRoutes, privateRoutes }