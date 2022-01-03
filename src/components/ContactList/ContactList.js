import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Contact from '../Contact';
import Loader from "react-loader-spinner";

export default function ContactList({ contacts, isLoading, onDeleteContact }) {
  return (isLoading
    ? <Loader
        type="Puff"
        color="#414141"
        height={100}
        width={100}
      timeout={3000} 
      style={{ textAlign: 'center', padding: '100px' }}
    />
    :(contacts.length === 0)
    ? <p className={s.contact__info}>No matches found</p>
    : <table className={s.contact_list} >
    <thead className={s.contact_list__head}>
      <tr className={s.contact_list__head_line}>
        <th className={s.contact_list__head_column}>Name</th>
        <th className={s.contact_list__head_column}>Number</th>
        <th className={s.contact_list__head_column}>Edit</th>
      </tr>
    </thead>
    <tbody className={s.contact_list__body}>
      {contacts.map(({ id, name, number }) => (
        <tr key={id} className={s.contact_list__body_line}>
          <Contact name={name} number={number} deleteBtn={() => onDeleteContact(id)} />
        </tr>)
      )}
    </tbody>
  </table>)
}

ContactList.propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
        onDeleteContact: PropTypes.func.isRequired,
}
    