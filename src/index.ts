import { Router } from "./router";

const $root = document.getElementById('root');

if(!$root){
    throw new Error('Root element not found');
}
Router();