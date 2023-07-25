import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import s from './ConatctForm.module.css';

const ContactForm = ({ addContact }) => {
  const nanoidID = nanoid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, number };
    addContact(contact);
    setName('');
    setNumber('');
  };

  const changeName = e => {
    setName(e.target.value);
  };

  const changeNumber = e => {
    setNumber(e.target.value);
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
            onChange={changeName}
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
            onChange={changeNumber}
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
