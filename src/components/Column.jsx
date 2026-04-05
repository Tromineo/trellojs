import { useState } from 'react';
import TaskCard   from './TaskCard';
import AddTaskForm from './AddTaskForm';
import styles from './Column.module.css';

export default function Column({ column, tasks, onAddTask, onDeleteTask, onUpdateTask, onDragStart, onDrop }) {
  const [showForm, setShowForm] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      className={`${styles.column} ${dragOver ? styles.dragOver : ''}`}
      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={() => { setDragOver(false); onDrop(column.id); }}
    >
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.dot} style={{ background: column.color }} />
          <h2 className={styles.title}>{column.label}</h2>
          <span className={styles.count}>{tasks.length}</span>
        </div>
        <button className={styles.addBtn} onClick={() => setShowForm(v => !v)} title="Nova tarefa">+</button>
      </div>

      {showForm && (
        <AddTaskForm
          columnId={column.id}
          onAdd={onAddTask}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className={styles.cards}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onUpdate={onUpdateTask}
            onDragStart={onDragStart}
          />
        ))}
        {tasks.length === 0 && !showForm && (
          <p className={styles.empty}>Nenhuma tarefa ainda</p>
        )}
      </div>
    </div>
  );
}
