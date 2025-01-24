import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter, contactsData }) => {
  return (
    <div className={css.searchBox}>
      {contactsData.length === 0 ? (
        <p className={css.text}>You have no contacts.</p>
      ) : (
        <>
          <p className={css.text}>Find contacts by name</p>
          <input
            className={css.input}
            type="text"
            value={value}
            onChange={e => onFilter(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default SearchBox;
