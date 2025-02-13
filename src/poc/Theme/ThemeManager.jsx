import React from "react";
import { useState, createContext } from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import "./themeManager.css";
export const themeWrapper = createContext();
function ThemeManager() {
  const [currTheme, setCurrTheme] = useState("light");
  const handleTheme = () => {
    const newTheme = currTheme == "light" ? "dark" : "light";
    setCurrTheme(newTheme);
  };
  return (
    <themeWrapper.Provider value={{ currTheme }}>
      <button onClick={handleTheme}>Toggle Theme</button>
      <Header></Header>
      <Article></Article>
      <Footer></Footer>
    </themeWrapper.Provider>
  );
}

export default ThemeManager;
