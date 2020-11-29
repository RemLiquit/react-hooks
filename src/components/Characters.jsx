import React, { useState, useEffect } from "react";
import Card from "./Card";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {characters.map((character) => (
        <Card {...character} location={character.origin} />
      ))}
    </div>
  );
};

export default Characters;
