import { navigateTo } from "../../../router";
import { loader } from "../../../components/loader/loader";

export function homeView(){
    const $root = document.getElementById('root');

    if($root){
        //Page Content
        $root.innerHTML='';
        const titleHome = document.createElement('h1') as HTMLHeadingElement;
        const contactButton = document.createElement('button') as HTMLButtonElement;
        const aboutButton = document.createElement('button') as HTMLButtonElement;

        titleHome.textContent = 'Home Page';
        contactButton.textContent = 'Contact Us';
        aboutButton.textContent = 'About Us';

        $root.appendChild(titleHome);
        $root.appendChild(contactButton);
        $root.appendChild(aboutButton);

        //Logic
        contactButton.addEventListener('click', ()=>{
            setTimeout(()=>{
                navigateTo('/contact');
            },1000);
            loader();
        });

        aboutButton.addEventListener('click', ()=>{
            setTimeout(()=>{
                navigateTo('/about-us');
            },1000);
            loader();
        });
    }

}