import React from 'react';

import s from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
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
};

export { Filter };
