class TableView{

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

    static update(model){

        document.querySelector('#tableTarget').innerHTML = new TableView().#template(model);  
                  
    }
}