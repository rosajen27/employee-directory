import React from 'react';

function Search(props) {
  return (
    <div class="search">
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Search Employee Name"
      />
      <button type="submit">Search</button>
    </div>
  );
}

export default Search;