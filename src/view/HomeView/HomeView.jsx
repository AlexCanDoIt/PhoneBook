/* Modules */
import { NavLink } from 'react-router-dom';

/* Components */
import { ReactComponent as Logo } from '../../icons/phonebook.svg';

/* Styles */
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <div className={styles.welcomeContainer}>
      <h1 className={styles.title}>Welcome to PhoneBook</h1>
      <Logo className={styles.logoIcon} width="40" height="40" />
    </div>

    <span className={styles.text}>"Keep all your phone contacts at one place"</span>

    <div className={styles.navContainer}>
      Please
      <NavLink
        to="/register"
        exact
        className={styles.link}
      >
        Signup
      </NavLink>
      or
      <NavLink
        to="/login"
        exact
        className={styles.link}
      >
        Login
      </NavLink>
      to start.
    </div>
  </div>
);

export default HomeView;
