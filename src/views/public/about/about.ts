import { navigateTo } from "../../../router";
import { loader } from "../../../components/loader/loader";

export function aboutView(){
    const $root = document.getElementById('root');

    if($root){
        //Page Content
        $root.innerHTML='';
        const titleHome = document.createElement('h1') as HTMLHeadingElement;
        const homeButton = document.createElement('button') as HTMLButtonElement;
        const contactButton = document.createElement('button') as HTMLButtonElement;

        titleHome.textContent = 'About Us Page';
        homeButton.textContent = 'Home';
        contactButton.textContent = 'Contact';

        $root.appendChild(titleHome);
        $root.appendChild(homeButton);
        $root.appendChild(contactButton);

        //Logic
        homeButton.addEventListener('click', ()=>{
            setTimeout(()=>{
                navigateTo('/home');
            },1000)
            loader();
        });

        contactButton.addEventListener('click', ()=>{
            setTimeout(()=>{
                navigateTo('/contact');
            },1000)
            loader();
        });
    }

}