import React, { useState, useReducer } from "react";
import "./css/card.css";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Card = (props) => {
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  return (
    <div>
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
          <div key={props.id}>
            <button type="button" onClick={() => handleClick(props.name)}>
              Agregar a favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
