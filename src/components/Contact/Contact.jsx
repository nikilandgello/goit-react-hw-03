import css from './Contact.module.css';

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <>
      <div className={css.contactGroup}>
        <div className={css.contactItem}>
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#icon-user"></use>
          </svg>
          <p className={css.contactDescription}>{name}</p>
        </div>
        <div className={css.contactItem}>
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#icon-phone"></use>
          </svg>
          <p className={css.contactDescription}>{number}</p>
        </div>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
