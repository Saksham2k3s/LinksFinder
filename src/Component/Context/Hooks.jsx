import React from "react";
import HooksContext from "./HooksContext";
import { useState } from "react";
import CategoryData from "../../Data/CategoryData.json";

function Hooks(props) {
  const list = [...new Set(CategoryData.map((items) => items.category))];
  const [categoryList, setCategorylist] = useState(list);

  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <>
      <HooksContext.Provider value={{ mode, toggleMode, categoryList }}>
        {props.children}
      </HooksContext.Provider>
    </>
  );
}

export default Hooks;
