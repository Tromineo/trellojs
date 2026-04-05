import Column from './Column';
import styles from './Board.module.css';

export default function Board({ columns, tasks, addTask, deleteTask, updateTask, setDrag, dragging, moveTask }) {
  return (
    <main className={styles.board}>
      {columns.map(col => (
        <Column
          key={col.id}
          column={col}
          tasks={tasks.filter(t => t.column === col.id)}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          onDragStart={setDrag}
          onDrop={(targetCol) => { if (dragging) moveTask(dragging, targetCol); setDrag(null); }}
        />
      ))}
    </main>
  );
}
