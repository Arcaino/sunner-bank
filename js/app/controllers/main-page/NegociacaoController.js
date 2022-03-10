class NegociacaoController{
    
    #inputData;
    #inputQuantidade;
    #inputValor;

    constructor(){

        this.#inputData = document.querySelector('#data');
        this.#inputQuantidade = document.querySelector('#quantidade');
        this.#inputValor = document.querySelector('#valor');
    }

}

export default NegociacaoController;