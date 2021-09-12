/* Modules */
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

/* Components */
import defaultAvatar from './default-avatar.png';

/* Styles */
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut())
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={defaultAvatar} alt="" width="32" />
      <span className={styles.name}>Welcome, {name}</span>
      <button className={styles.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}
