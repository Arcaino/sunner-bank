class TableView{

    #tableTarget;

    constructor(){

        this.#tableTarget = document.querySelector('#tableTarget');
    }

    #template(model){

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                <thead>

                <tbody>
                    <tr>
                        ${model.listaNegociacoes.map(n => `

                            <tr>
                                <td>${n.data}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                            
                        `).join('')}
                    </tr>
                </tbody>
            </table>
        `
    }

    update(model){

        this.#tableTarget.innerHTML = this.#template(model);  
                  
    }
}