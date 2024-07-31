import { routes } from "./helpers/routes";

export function Router(){
    const path=window.location.pathname;
    const publicRoute = routes.public.find(r=>r.path===path);

    //Si intenta acceder a la ruta principal
    if(path=='/'){
        navigateTo('/home');
        return;
    }

    //Manejo de rutas publicas
    if(publicRoute){
        publicRoute.component();
        return;
    }

    //Not found
    if(!publicRoute && path != '/'){
        alert('Ruta no encontrada');
        navigateTo('/home');
        return;
    }

}
export function navigateTo(path: string):void {
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}
window.addEventListener('popstate',Router)