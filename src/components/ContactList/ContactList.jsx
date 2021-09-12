import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Contact from '../Contact';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact name={name} number={number} onDelete={() => dispatch(contactsOperations.deleteContact(id))} />
        </li>
      ))}
    </ul>
  );
}
