class ListaNegociacoes{

    #listaNegociacoes;

    constructor(){

        this.#listaNegociacoes = [];
    }

    get listaNegociacoes(){

        return [].concat(this.#listaNegociacoes);
    }

    adiciona(negociacao) {
        
        this.#listaNegociacoes.push(negociacao);
    }
}