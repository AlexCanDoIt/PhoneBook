/* Modules */
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

/* Components */
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';

/* Styles */
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}