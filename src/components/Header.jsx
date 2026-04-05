import styles from './Header.module.css';

export default function Header({ taskCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>⬡</span>
        <h1>KanbanFlow</h1>
      </div>
      <div className={styles.meta}>
        <span className={styles.badge}>{taskCount} tarefas</span>
      </div>
    </header>
  );
}
