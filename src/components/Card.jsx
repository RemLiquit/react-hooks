import React from "react";
import "./css/card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div>
        <img src={props.image} alt="" className="container_image" />
      </div>
      <div className="container_span">
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {props.name}
        </span>
        <span>{props.status}</span>
        <span>{props.gender}</span>
        <span>{props.species}</span>
        <span>{props.location.name}</span>
      </div>
    </div>
  );
};

export default Card;
