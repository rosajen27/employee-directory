import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="circle-img" src={props.img} alt="avatar_img"/>
      <h1>{props.name}</h1>
      <p>{props.position}</p>
      <p>{props.location}</p>
      <p>{props.phonenumber}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
