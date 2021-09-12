import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactEditor.module.css';

export default function ContactEditor() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();
  const onSubmit = () => dispatch(contactsOperations.addContact(name, number));

  const handleChange = useCallback(e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        console.error('Error from ContactEditor');
    }
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    onSubmit();
    setName('');
    setNumber('');
  }, [contacts, dispatch, name, number]);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} >
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          placeholder=" "
        />
        <span className={styles.labelText}>Name</span>
      </label>

      <label className={styles.label} >
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          placeholder=" "
        />
        <span className={styles.labelText}>Number</span>
      </label>
      
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  )
}
