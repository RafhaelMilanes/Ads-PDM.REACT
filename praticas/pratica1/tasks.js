// Array de tarefas
let tasks = [
    { id: 1, name: "Fazer compras", completed: false },
    { id: 2, name: "Estudar JavaScript", completed: true },
    { id: 3, name: "Fazer exercícios", completed: false }
  ];
  
  // Função para retornar o array de tarefas
  function getTasks() {
    return tasks;
  }
  
  // Função para adicionar uma nova tarefa
  function addTask(taskName) {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id: newId, name: taskName, completed: false };
    tasks = [...tasks, newTask];
  }
  
  // Função para remover uma tarefa pelo ID
  function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
  }
  
  // Função para atualizar uma tarefa pelo ID
  function updateTask(taskId, updatedProperties) {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      Object.assign(taskToUpdate, updatedProperties);
    }
  }
  
  // Exemplo de uso
  console.log("Tarefas antes de adicionar uma nova tarefa:", getTasks());
  addTask("Ler um livro");
  console.log("Tarefas após adicionar uma nova tarefa:", getTasks());
  
  console.log("Tarefas antes de remover uma tarefa:", getTasks());
  removeTask(2);
  console.log("Tarefas após remover uma tarefa:", getTasks());
  
  console.log("Tarefas antes de atualizar uma tarefa:", getTasks());
  updateTask(1, { name: "Fazer compras de alimentos", completed: true });
  console.log("Tarefas após atualizar uma tarefa:", getTasks());
  
export  { getTasks, addTask, updateTask, removeTask }