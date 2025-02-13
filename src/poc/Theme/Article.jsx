import React from "react";
import { useContext } from "react";
import { themeWrapper } from "./ThemeManager";

function Article() {
  const { currTheme } = useContext(themeWrapper);
  return (
    <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
      <div>Article</div>

      <p className={currTheme}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eos sed
        natus atque expedita eligendi libero unde rerum doloremque, modi
        repellat omnis veritatis, id velit eum quod, ratione accusantium iure!
      </p>
    </div>
  );
}

export default Article;
