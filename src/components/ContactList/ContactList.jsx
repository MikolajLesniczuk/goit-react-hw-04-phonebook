import React from 'react';

import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number }, index) => (
        <li className={s.li} key={index}>
          {name} : {number}
          <button className={s.button} onClick={() => deleteContact(index)}>
            usuń
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
