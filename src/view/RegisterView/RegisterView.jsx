import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './Register.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onRegister = () => dispatch(authOperations.register({name, email, password}));

  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        console.error('Error from RegisterView');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registration Page</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder=" "
          />
          <span className={styles.labelText}>Name</span>
        </label>

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

        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
}
