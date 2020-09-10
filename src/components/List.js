import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';

function List(props) {
  let users = props.filteredUsers.map((user, i) => {
    return (
      <Container>
        <Card
          key={i}
          image={user.image}
          name={user.name}
          position={user.position}
          location={user.location}
          number={user.number}
          email={user.email}
        />
      </Container>
    );
  });
  return <div>{users}</div>;
}

export default List;