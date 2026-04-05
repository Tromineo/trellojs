import './styles/global.css';
import Header from './components/Header';
import Board  from './components/Board';
import { useKanban } from './hooks/useKanban';

export default function App() {
  const kanban = useKanban();

  return (
    <>
      <Header taskCount={kanban.tasks.length} />
      <Board
        columns={kanban.columns}
        tasks={kanban.tasks}
        addTask={kanban.addTask}
        deleteTask={kanban.deleteTask}
        updateTask={kanban.updateTask}
        setDrag={kanban.setDrag}
        dragging={kanban.dragging}
        moveTask={kanban.moveTask}
      />
    </>
  );
}
