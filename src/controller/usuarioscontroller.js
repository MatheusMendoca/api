import {bdusuario} from "../infra/db.js"

class usuariocontroller {
    static configureUsuarios(app) {
        app.get('/pessoas', (req, res) =>
            res.send('Rota ativada com GET e recurso Pessoas: Valores de Pessoas devem ser retornados')
        );

        app.post('/usuario/:email',(req,res)=>
        res.send('procurar email com usuario')
        );

        app.delete('/usuarios/:email',usuariocontroller.apagarusuario);
        
        app.put('/usuario/:email',usuariocontroller.atualizausuario)
    }


    static filtarporemail(req,res){
        const usuario = bdusuario.filter ((usuario) => usuario.email === req.params.email)
        res.send(usuario)
        console.log(usuario)
    }
    
    static apagarusuario(req,res){
        let index
        const [usuario] = bdusuario.filter ((usuario,i) => {
            if (usuario.email === req.params.email){
                index = i
            }
            index =index
        return usuario.email === req.params.email})
        bdusuario.splice(index, 1)
        console.log(usuario)
        res.send (` usuario: ${usuario.nome},index:${index}`)
    }

    static atualizausuario(req,res){
        let index
        const [usuario] = bdusuario.filter ((usuario,i) => {
            if (usuario.email === req.params.email){
                index = i
            }
        return usuario.email === req.params.email})
        
        bdusuario[index].nome =req.body.nome
        bdusuario[index].email =req.body.email
        bdusuario[index].senha=req.body.senha

        console.log (usuario)
        res.send("atualizado com sucesso")
    }


}

export default usuariocontroller;

