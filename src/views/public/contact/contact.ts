import { loader } from "../../../components/loader/loader";
import { navigateTo } from "../../../router";

export function contactView(){
    const $root = document.getElementById('root');

    if($root){
        //Page Content
        $root.innerHTML=``;
        const titleHome = document.createElement('h1') as HTMLHeadingElement;
        const homeButton = document.createElement('button') as HTMLButtonElement;
        const aboutButton = document.createElement('button') as HTMLButtonElement;

        titleHome.textContent = 'Contac Page';
        homeButton.textContent = 'Home';
        aboutButton.textContent = 'About Us';

        $root.appendChild(titleHome);
        $root.appendChild(homeButton);
        $root.appendChild(aboutButton);

        //Logic
        homeButton.addEventListener('click', ()=>{
            setTimeout(()=>{
                navigateTo('/home');
            },1000)
            loader();
            
        });

        aboutButton.addEventListener('click', ()=>{
            setTimeout(()=>{
                navigateTo('/about-us');
            },1000)
            loader();
        });
    }

}