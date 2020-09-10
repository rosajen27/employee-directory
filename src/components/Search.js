import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Employee Name"
      />
      <button type="submit">Search</button>
    </div>
  );
}

export default Search;