import styles from './spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <span className={styles.loader_spinner} role="spinner"></span>
      </div>
    </div>
  );
};

export default Spinner;
