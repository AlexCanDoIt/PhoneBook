/* Modules */
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

/* Components */
import ContactFilter from '../../components/ContactFilter';
import ContactEditor from '../../components/ContactEditor';
import ContactList from '../../components/ContactList';
import Modal from '../../components/Modal';
import IconButton from '../../components/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

/* Styles */
import styles from './ContactsView.module.css';

export default function ContactsView() {
  const [showModal, setShowModal] = useState(false);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div className={styles.container}>
      <ContactEditor />

      <ContactFilter />

      {/* <IconButton onClick={toggleModal} aria-label="Add contacts">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton> */}

      <ContactList />
      {isLoadingContacts && <h4>Updating data...</h4>}

      {/* {showModal && (
        <Modal onClose={toggleModal}>
          <ContactEditor onSave={toggleModal} />
        </Modal>
      )} */}
    </div>
  );
}
