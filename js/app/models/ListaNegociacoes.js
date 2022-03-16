class ListaNegociacoes{

    #listaNegociacoes;

    constructor(negociacao){

        this.#listaNegociacoes = [].concat(negociacao);
    }

    get listaNegociacoes(){

        return this.#listaNegociacoes;
    }
}