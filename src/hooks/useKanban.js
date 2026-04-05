import { useState, useCallback } from 'react';

const COLUMNS = [
  { id: 'todo',  label: 'A fazer',    color: 'var(--col-todo)'  },
  { id: 'doing', label: 'Em andamento', color: 'var(--col-doing)' },
  { id: 'done',  label: 'Concluído',  color: 'var(--col-done)'  },
];

const INITIAL_TASKS = [
  { id: '1', title: 'Definir requisitos do projeto',  desc: 'Levantar todas as funcionalidades necessárias com o cliente.', column: 'todo',  priority: 'alta',  tags: ['planejamento'] },
  { id: '2', title: 'Criar wireframes',               desc: 'Esboçar as telas principais no Figma.', column: 'todo',  priority: 'média', tags: ['design'] },
  { id: '3', title: 'Configurar ambiente de dev',     desc: 'Instalar dependências e configurar ESLint, Prettier e Vite.', column: 'doing', priority: 'alta',  tags: ['infra'] },
  { id: '4', title: 'Implementar autenticação',       desc: 'Login com JWT e rota protegida.', column: 'doing', priority: 'alta',  tags: ['backend'] },
  { id: '5', title: 'Criar componente de header',     desc: 'Responsivo, com logo e menu de navegação.', column: 'done',  priority: 'baixa', tags: ['frontend'] },
  { id: '6', title: 'Setup do banco de dados',        desc: 'Migrations e seeders iniciais.', column: 'done',  priority: 'alta',  tags: ['backend', 'infra'] },
];

export function useKanban() {
  const [tasks, setTasks]   = useState(INITIAL_TASKS);
  const [columns]           = useState(COLUMNS);
  const [dragging, setDrag] = useState(null);

  const addTask = useCallback((task) => {
    setTasks(prev => [...prev, { ...task, id: crypto.randomUUID() }]);
  }, []);

  const updateTask = useCallback((id, patch) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...patch } : t));
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const moveTask = useCallback((taskId, targetCol) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, column: targetCol } : t));
  }, []);

  return { tasks, columns, dragging, setDrag, addTask, updateTask, deleteTask, moveTask };
}
