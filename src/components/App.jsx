import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notiflix from 'notiflix';
import s from './ContactForm/ConatctForm.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  deleteContact = index => {
    this.setState(prevState => {
      const update = [...prevState.contacts];
      update.splice(index, 1);
      return { contacts: update };
    });
  };

  addContact = newcontact => {
    const { contacts } = this.state;

    const excistingContact = contacts.find(
      contact => contact.name.toLowerCase() === newcontact.name.toLowerCase()
    );

    if (excistingContact) {
      Notiflix.Notify.info(`${excistingContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newcontact],
    }));
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  setFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={s.contener}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
