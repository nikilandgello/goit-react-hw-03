import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactsData.map(contact => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
