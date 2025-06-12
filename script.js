const addBtn = document.getElementById("addBtn");
const tarefa = document.getElementById("tarefa");
const taskList = document.getElementById("taskList")
const titulo = document.getElementById("titulo")

let nome = prompt("Qual o seu nome?")
if(nome==""){
    titulo.innerHTML = 'Lista de Tarefas' 
}
else{
    titulo.innerHTML = `Lista de Tarefas do(a) ${nome}`
}
addBtn.addEventListener("click", criarTarefa);

function criarTarefa(){
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem);

//criar botão de deletar tarefa
const removeButton = document.createElement('button')
removeButton.id="remove"
removeButton.textContent = "X"

removeButton.addEventListener("click", function(){
    taskList.removeChild(listItem)
    
})
//criar botão de concluir tarefa
const concluirButton = document.createElement('button')
concluirButton.id ="conclui"
concluirButton.textContent ="✓"

//listen.appendChild(concluirButton)
let buttonsItem= document.createElement('div')
buttonsItem.classList.toggle('buttonsItem')
listItem.appendChild(buttonsItem)
buttonsItem.appendChild(concluirButton)
buttonsItem.appendChild(removeButton

)
concluirButton.addEventListener("click", function(){
    listItem.style.textDecoration = "line-through";
})
}
