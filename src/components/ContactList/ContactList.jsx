import React, { Component } from 'react';

import s from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

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
  }
}

export default ContactList;
