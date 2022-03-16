class NegociacaoController{
    
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacoes;
    #tableView;

    constructor(){
        this.#onInit();
        var $ = document.querySelector.bind(document);

        this.#inputData = $('#data');
        this.#inputQuantidade = $('#quantidade');
        this.#inputValor = $('#valor');
        
        this.#listaNegociacoes = new ListaNegociacoes();
        this.#tableView = new TableView();
        this.#tableView.update(new ListaNegociacoes())
    }

    #onInit(){

        document.querySelector("#negociacoesForm").addEventListener("submit", event => this.#adiciona(event));
    }

    #adiciona(event){
    
        event.preventDefault();
        this.#listaNegociacoes.adiciona(this.#criaNegociacoes());
        this.#resetarFormulario();
        this.#tableView.update(this.#listaNegociacoes);
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