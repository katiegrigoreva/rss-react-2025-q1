import styles from './errorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={styles.errorMessage}>
      <img src={'../error.gif'} alt="Error" />
    </div>
  );
};

export default ErrorMessage;
