import { useState } from 'react';
import styles from './TaskCard.module.css';

const PRIORITY_COLOR = { alta: '#ef4444', média: '#f59e0b', baixa: '#22c55e' };

export default function TaskCard({ task, onDelete, onUpdate, onDragStart }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState({ title: task.title, desc: task.desc });

  function save() {
    if (!draft.title.trim()) return;
    onUpdate(task.id, draft);
    setEditing(false);
  }

  if (editing) {
    return (
      <div className={styles.card}>
        <input
          className={styles.editInput}
          value={draft.title}
          onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
          autoFocus
        />
        <textarea
          className={styles.editArea}
          value={draft.desc}
          rows={3}
          onChange={e => setDraft(d => ({ ...d, desc: e.target.value }))}
        />
        <div className={styles.editActions}>
          <button className={styles.btnSave} onClick={save}>Salvar</button>
          <button className={styles.btnCancel} onClick={() => setEditing(false)}>Cancelar</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.card}
      draggable
      onDragStart={() => onDragStart(task.id)}
    >
      <div className={styles.topRow}>
        <span
          className={styles.priority}
          style={{ background: PRIORITY_COLOR[task.priority] + '22', color: PRIORITY_COLOR[task.priority] }}
        >
          {task.priority}
        </span>
        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={() => setEditing(true)} title="Editar">✎</button>
          <button className={`${styles.iconBtn} ${styles.iconBtnDanger}`} onClick={() => onDelete(task.id)} title="Excluir">✕</button>
        </div>
      </div>
      <h3 className={styles.title}>{task.title}</h3>
      {task.desc && <p className={styles.desc}>{task.desc}</p>}
      {task.tags?.length > 0 && (
        <div className={styles.tags}>
          {task.tags.map(tag => <span className={styles.tag} key={tag}>#{tag}</span>)}
        </div>
      )}
    </div>
  );
}
