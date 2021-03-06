class MainPageView{

    #homepage

    constructor(){

        this.#homepage = document.querySelector('#root'); 
        this.#homepage.innerHTML = this.#template();        
        new NegociacaoController;
    }

    #template(){

        return `
            <h1 class="text-center">Negociações</h1>
        
            <div id="mensagemView"></div>
            
            <form class="form" id="negociacoesForm">
                
                <div class="form-group">
                    <label for="data">Data</label>
                    <input type="date" id="data" class="form-control" required autofocus/>        
                </div>    
                
                <div class="form-group">
                    <label for="quantidade">Quantidade</label>
                    <input type="number" min="1" step="1" id="quantidade" class="form-control" value="1" required/>
                </div>
                
                <div class="form-group">
                    <label for="valor">Valor</label>
                    <input id="valor" type="number" class="form-control"  min="0.01" step="0.01" value="0.0" required />
                </div>
                
                <button class="btn btn-primary" id="submit" type="submit">Incluir</button>
            </form>
            
            <div class="text-center">
                <button class="btn btn-primary text-center" type="button">
                    Importar Negociações
                </button>
                <button class="btn btn-primary text-center" type="button">
                    Apagar
                </button>
            </div>

            <br>

            <div id="tableTarget"></div>
        `
    }
}