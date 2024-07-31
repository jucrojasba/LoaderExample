import { aboutView } from '../views/public/about/about';
import { contactView } from '../views/public/contact/contact';
import { homeView } from '../views/public/home/home';
export const routes ={
    public:[
        {path:'/home', component:homeView},
        {path:'/contact', component:contactView},
        {path:'/about-us', component:aboutView}
    ]
}