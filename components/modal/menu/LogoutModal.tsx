import useLogoutCheck from 'hooks/Login/useLogoutCheck';
import styles from 'styles/modal/menu/LogoutModal.module.scss';

export default function LogoutModal() {
  const [onReturn, onLogout] = useLogoutCheck();

  return (
    <div className={styles.container}>
      <div className={styles.phrase}>
        <div className={styles.emoji}>🥲</div>
        <div className={styles.message}>
          로그아웃
          <br />
          하시겠습니까?
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.negative}>
          <input onClick={onReturn} type='button' value='아니오' />
        </div>
        <div className={styles.positive}>
          <input onClick={onLogout} type='button' value='예' />
        </div>
      </div>
    </div>
  );
}
