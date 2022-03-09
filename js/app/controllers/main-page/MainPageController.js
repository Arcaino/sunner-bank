class MainPageController{

    #homepage;

    constructor(){
        this.#homepage = document.querySelector('#root'); 
        this.#homepage.innerHTML = MainPage.template();
    }
}