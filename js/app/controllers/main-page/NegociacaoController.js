class NegociacaoController{
    
    #inputData;
    #inputQuantidade;
    #inputValor;

    constructor(){

        var $ = document.querySelector.bind(document);

        this.#inputData = $('#data');
        this.#inputQuantidade = $('#quantidade');
        this.#inputValor = $('#valor');
        this.#onInit();
    }

    #onInit(){

        document.querySelector("#negociacoesForm").addEventListener("submit", event => this.#adiciona(event));
    }

    #adiciona(event){
    
        event.preventDefault();
        new ListaNegociacoes(this.#criaNegociacoes());
        this.#resetarFormulario();
    }

    #resetarFormulario(){

        this.#inputData.value = '';
        this.#inputQuantidade.value = 1;
        this.#inputValor.value = 0.0;
        this.#inputData.focus();
    }

    #criaNegociacoes(){

        return new Negociacao(

            this.#inputData.value,
            this.#inputQuantidade.value,
            this.#inputValor.value
        );
    }
}