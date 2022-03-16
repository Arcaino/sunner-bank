class MainPageController{

    #homepage;

    constructor(){

        this.#homepage = document.querySelector('#root'); 
        this.#homepage.innerHTML = NegociacoesView.template();
        new NegociacaoController;
    }
}