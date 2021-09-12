import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div className={styles.container}>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Signup
    </NavLink>
    
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
