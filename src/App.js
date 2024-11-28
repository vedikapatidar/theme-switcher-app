import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Global Theme Switcher</h1>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
