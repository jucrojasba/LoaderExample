import './loader.css'
export function loader(){
    const loaderHTML=`
    <div class="loader-container">
      <div class="loader"></div>
    </div>
    `
    function injectLoader() {
        const $root = document.getElementById("root") as HTMLElement;
        $root.insertAdjacentHTML("beforeend", loaderHTML);
      }
    
      injectLoader();
}