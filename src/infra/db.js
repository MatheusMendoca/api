import Tarefa from"../models/tarefa.js"
import Usuario from"../models/usuario.js"

const bdusuario = [];
const bdtarefa = []

const usuario = new Usuario ("matheus","la@gmail.com","lmamau4002")
bdusuario.push(usuario)

const tarefa = new Tarefa ('titulo da tarefa' ,'descrição da tarefa','incompleto', new Date())
bdtarefa.push(tarefa)

export {bdusuario, bdtarefa}