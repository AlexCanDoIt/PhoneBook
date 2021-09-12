import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => (
  <>
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
    </div>

    <IconButton className={styles.deleteButton} onClick={onDelete} aria-label="Delete contacts">
      <DeleteIcon className={styles.deleteIcon} width="30" height="30"/>
    </IconButton>
  </>
)

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Contact;
