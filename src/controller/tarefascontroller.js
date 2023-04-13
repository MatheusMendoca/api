import Tarefa from "../models/tarefa.js"
import {bdtarefa} from "../infra/db.js"

class tarefascontroller {
    static configureTarefas(app) {
        app.get('/tarefas', (req, res) =>
            res.send('Rota ativada com GET e recurso Tarefas: Valores de Tarefas devem ser retornados')
        );

        app.post('/tarefas', (req, res) =>{
            const{titulo,descriçao,status,data} = req.body
            const tarefainseri =new Tarefa (titulo,descriçao,status,data)
            bdtarefa.push(tarefainseri) 
            console.log(req.body)
            res.send('ola mundo')
    });
    app.post('/', (req, res) =>{
        res.send('pagina inicial')
});
    }
    
}

export default tarefascontroller;