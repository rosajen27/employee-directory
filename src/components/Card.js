import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.img} alt="avatar_img" width="200px"/>
      <p>{props.position}</p>
      <p>{props.location}</p>
      <p>{props.phonenumber}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
