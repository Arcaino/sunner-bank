class NegociacaoController{
    
    #inputData;
    #inputQuantidade;
    #inputValor;

    constructor(){

        this.#inputData = document.querySelector('#data');
        this.#inputQuantidade = document.querySelector('#quantidade');
        this.#inputValor = document.querySelector('#valor');
        this.#onInit();
    }

    #onInit(){

        document.querySelector("#negociacoesForm").addEventListener("submit", event => this.#incluir(event));
    }

    #incluir(event){
    
        event.preventDefault();
        console.log('teste');
    }
}