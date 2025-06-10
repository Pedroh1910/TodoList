//definir constantes para uso no codigo//
const addBtn = document.getElementById('btn-add')
const tarefa = document.getElementById('tarefa')
const taskList = document.getElementById('taskList')
const titulo = document.getElementById('titulo')

let nome = prompt("Qual o seu nome?")

titulo.innerHTML = ` Lista de tarefa: ${nome}`
//acompanha o evento de clique do botão adicior tarefa
addBtn.addEventListener("click",criaTarefa)

function criaTarefa(){
    
}

