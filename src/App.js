import React, { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import ThemeContext from "./components/context/ThemeContext";
import "./App.css";

function App() {
  const [theme, updateTheme] = useState("bg_light");

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div className={"App " + theme}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
