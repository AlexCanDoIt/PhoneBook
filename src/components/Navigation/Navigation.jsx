/* Modules */
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { ReactComponent as Logo } from '../../icons/phonebook.svg';

/* Styles */
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        exact
        className={styles.link + ' ' + styles.logoLink}
        activeClassName={styles.activeLink + ' ' + styles.activeLogoLink}
      >
        <Logo className={styles.logoIcon} width="20" height="20" />
      </NavLink>

      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <span className={styles.text}>PhoneBook</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <span className={styles.text}>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
}
