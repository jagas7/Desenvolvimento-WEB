import { useState } from 'react';
import './App.css';

function App() {
  // 1. Estado da Lista: Agora cada tarefa tem um status de 'concluída' (herança da Atv6)
  const [tasks, setTasks] = useState([]);
  
  // 2. Estado do Input: Controla o que está sendo digitado
  const [inputValue, setInputValue] = useState('');

  // 3. Adicionar Tarefa (Substitui o document.createElement da Atv6)
  const handleAddTask = (e) => {
    e.preventDefault(); // Usando form para permitir o "Enter" nativamente
    
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false // Novo atributo para controlar o checkbox
    };

    setTasks([...tasks, newTask]);
    setInputValue(''); 
  };

  // 4. Remover Tarefa (Substitui o item.remove() da Atv6)
  const handleRemoveTask = (idToRemove) => {
    setTasks(tasks.filter(task => task.id !== idToRemove));
  };

  // 5. Marcar como Concluída (A refatoração daquele adicional do checkbox da Atv6)
  const handleToggleTask = (idToToggle) => {
    setTasks(tasks.map(task => 
      task.id === idToToggle ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <main className="container">
      <h1>Lista de Tarefas</h1>
      
      <form onSubmit={handleAddTask} className="input-group">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Renderização dinâmica (Substitui o appendChild da Atv6) */}
      <ul id="taskList">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            
            {/* O span com o checkbox pedido na Atv6 */}
            <span className="task-content">
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span className="task-text">{task.text}</span>
            </span>

            {/* O botão de remover específico de cada item */}
            <button 
              type="button" 
              className="btn-remove" 
              onClick={() => handleRemoveTask(task.id)}
            >
              Remover
            </button>
            
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;