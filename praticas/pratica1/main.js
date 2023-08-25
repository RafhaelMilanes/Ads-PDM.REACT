// Importar as funções do módulo tasks.js
import { getTasks, addTask, updateTask, removeTask } from "./tasks.js"

// Exibir informações das tarefas no console
function displayTasks(tasks) {
  console.log("Lista de Tarefas:");
  tasks.forEach(({ id, name, completed }) => {
    console.log(`ID: ${id}, Nome: ${name}, Concluída: ${completed}`);
  });
}

// Obter a lista inicial de tarefas
let tasks = getTasks();

// Exibir informações das tarefas antes das modificações
console.log("Antes das modificações:");
displayTasks(tasks);

// Adicionar uma nova tarefa
addTask("Ler um artigo");

// Remover uma tarefa pelo ID
removeTask(2);

// Atualizar uma tarefa para concluída
updateTask(1, { completed: true });

// Obter a lista atualizada de tarefas
tasks = getTasks();

// Exibir informações das tarefas após as modificações
console.log("Após as modificaçõees:");
displayTasks(tasks);
