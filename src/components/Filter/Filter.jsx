import React, { Component } from 'react';

import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div>
        <p className={s.find}>Find contacts by name :</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
    );
  }
}

export default Filter;
