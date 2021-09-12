import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLogin = () => dispatch(authOperations.logIn({email, password}));

  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        console.error('Error from LoginView');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onLogin();
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login Page</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.label}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder=" "
          />
          <span className={styles.labelText}>Email</span>
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder=" "
          />
          <span className={styles.labelText}>Password</span>
        </label>

        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}
