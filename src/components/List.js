import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';

function List(props) {
  let users = props.filteredUsers.map((user, i) => {
    return (
      <div class="main">
      <Container>
        <Card
          key={i}
          name={user.name}
          position={user.position}
          location={user.location}
          number={user.number}
          email={user.email}
        />
      </Container>
      </div>
    );
  });
  return <div>{users}</div>;
}

export default List;