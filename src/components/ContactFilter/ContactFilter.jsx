import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import styles from './ContactFilter.module.css';

export default function ContactFilter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(e => {
    dispatch(changeFilter(e.target.value))
  }, [dispatch]);

  return (
    <label className={styles.label}>
      <span>Find contacts by name:</span>
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  );
}