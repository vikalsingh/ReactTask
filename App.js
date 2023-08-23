import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { createContext } from "react";

export const ThemeContext = createContext(null);

const AppLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="grid-container" id={theme}>
        <Header toggleTheme={toggleTheme}/>
        <Sidebar />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
