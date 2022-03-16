class NegociacaoController{
    
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;

    constructor(){

        var $ = document.querySelector.bind(document);

        this.#inputData = $('#data');
        this.#inputQuantidade = $('#quantidade');
        this.#inputValor = $('#valor');
        this.#onInit();
        this.#listaNegociacoes = new ListaNegociacoes();
    }

    #onInit(){

        document.querySelector("#negociacoesForm").addEventListener("submit", event => this.#adiciona(event));
    }

    #adiciona(event){
    
        event.preventDefault();
        this.#listaNegociacoes.adiciona(this.#criaNegociacoes());
        this.#resetarFormulario();
        TableView.update(this.#listaNegociacoes);
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