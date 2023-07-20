import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import s from './ConatctForm.module.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};

class ContactForm extends Component {
  nanoidID = nanoid();

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);

    this.setState({ ...INITIAL_STATE });
  };

  handleChange = e => {
    const { value, name } = e.target;
    //   console.log(value)
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <>
        <div>
          <form className={s.flex} onSubmit={this.handleSubmit}>
            <label className={s.label} htmlFor={this.nanoidID}>
              NAME
            </label>
            <input
              className={s.input}
              id={this.nanoidID}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />

            <label className={s.label} htmlFor={this.nanoidID}>
              NUMBER
            </label>
            <input
              className={s.input}
              id={this.nanoidID}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />

            <button className={s.button} type="submit">
              Add Contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactForm;
