import { useState } from 'react';
import styles from './AddTaskForm.module.css';

export default function AddTaskForm({ columnId, onAdd, onClose }) {
  const [title, setTitle]       = useState('');
  const [desc, setDesc]         = useState('');
  const [priority, setPriority] = useState('média');
  const [tags, setTags]         = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      desc:  desc.trim(),
      priority,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      column: columnId,
    });
    onClose();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Título da tarefa *"
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoFocus
        required
      />
      <textarea
        className={styles.textarea}
        placeholder="Descrição (opcional)"
        rows={3}
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <div className={styles.row}>
        <select className={styles.select} value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
        <input
          className={styles.input}
          placeholder="Tags (vírgula)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.btnAdd}>Adicionar</button>
        <button type="button" className={styles.btnCancel} onClick={onClose}>Cancelar</button>
      </div>
    </form>
  );
}
