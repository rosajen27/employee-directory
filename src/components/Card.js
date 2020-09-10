import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="circle-img" src={props.image} alt="avatar_img" />
      <h1>{props.name}</h1>
      <p>{props.position}</p>
      <p>{props.location}</p>
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;