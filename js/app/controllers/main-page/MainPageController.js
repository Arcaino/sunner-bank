import mainPageView from '../../views/pages/main-page/MainPage.js';

class MainPageController{

    #homepage;

    constructor(){
        this.#homepage = document.querySelector('#root'); 
        this.#homepage.innerHTML = mainPageView.template();
    }
}

export default MainPageController;