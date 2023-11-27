import React, { useState, useEffect } from "react";
import CategoryData from "../Data/CategoryData.json";

const Sidebar = () => {
  // const categories = [
  //   'Frontend',
  //   'Backend',
  //   'Languages',
  //   'Open Source',
  //   'DevOps',
  //   'Graphic Designing',
  // ];
  const categories = [...new Set(CategoryData.map((items) => items.category))];

  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = categories[categoryIndex];
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    let text = "";
    const intervalId = setInterval(() => {
      if (index <= currentCategory.length) {
        text = currentCategory.slice(0, index);
        setTypedText(text);
        index += 1;
      } else {
        clearInterval(intervalId);
        // Move to the next category
        setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
      }
    }, 150); // Adjust the typing speed as needed

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentCategory]);

  return (
    <div className="typing-text">
      <p>{typedText}</p>
    </div>
  );
};

export default Sidebar;
