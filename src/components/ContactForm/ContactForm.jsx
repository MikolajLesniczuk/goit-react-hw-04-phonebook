import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import s from './ConatctForm.module.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const nanoidID = nanoid();

  const [contact, setContact] = useState({
    contacts: [],
    name: '',
    number: '',
  });

  const { name, number } = contact;

  const handleSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({ ...INITIAL_STATE });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form className={s.flex} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={nanoidID}>
            NAME
          </label>
          <input
            className={s.input}
            id={nanoidID}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />

          <label className={s.label} htmlFor={nanoidID}>
            NUMBER
          </label>
          <input
            className={s.input}
            id={nanoidID}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />

          <button className={s.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </>
  );
};

export { ContactForm };
