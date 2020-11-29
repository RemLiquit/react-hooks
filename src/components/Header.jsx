import React, { useState, useContext } from "react";
import { lightTheme, darkTheme } from "../components/context/ThemeContext";

import "./css/header.css";

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode();
  };

  return (
    <div style={{ background: setDarkmode }}>
      {console.log(darkMode)}
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
