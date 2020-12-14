import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
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

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const searchInput = useRef(null);

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div
      style={{
        // display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div className="Search">
        <input
          type="text"
          value={search}
          ref={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div className="Favorites">
        {favorites.favorites.map((favorite) => (
          <div style={{ display: "grid" }}>
            <span key={favorite.id}>{favorite.name}</span>
          </div>
        ))}
      </div>
      {filteredUsers.map((character) => (
        <div className="container">
          <div>
            <img src={character.image} alt="" className="container_image" />
          </div>
          <div className="container_span">
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {character.name}
            </span>
            <span>{character.status}</span>
            <span>{character.gender}</span>
            <span>{character.species}</span>
            <span>{character.location.name}</span>
            <div key={character.id}>
              <button type="button" onClick={() => handleClick(character)}>
                Agregar a favoritos
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
