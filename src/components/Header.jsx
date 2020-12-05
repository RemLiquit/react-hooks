import React, { useState, useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import "./css/header.css";

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkmode(!darkMode);
    theme === "bg_light" ? updateTheme("bg_dark") : updateTheme("bg_light");
  };

  return (
    <div>
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DarkMode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
