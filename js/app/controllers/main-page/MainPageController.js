class MainPageController{

    #homepage;

    constructor(){

        this.#homepage = document.querySelector('#root'); 
        this.#homepage.innerHTML = MainPageView.template();

        TableView.update(new ListaNegociacoes());

        new NegociacaoController;
    }
}