import React, { useContext } from "react";
import HooksContext from "./Context/HooksContext";
import Sidebar from "./Sidebar";

function HomePage() {
  const context = useContext(HooksContext)
  const {mode} = context
  return (
    <>
      <div className={`container home`} >
        <h1 className="text-center mt-5 h1">
          {" "}
          <span className={`simple-text ${mode === false ? 'darkText': 'lightText'}`}>Links</span>
          <span className="special-text">Finder</span>
        </h1>
        

        <div className="container homepagebtn w-50">
        <p className={`text-center mt-5 ${mode === false ? 'darkText': 'lightText'}`} >
          An innovative platform designed to simplify the process of finding
          high-quality learning resources. FindTheBest aims to provide a
          centralized hub where you can effortlessly discover the most valuable
          and up-to-date video tutorials across the digital landscape.
        </p>
        <p className={`text-center mt-5 ${mode === false ? 'darkText': 'lightText'}`} >
          An innovative platform designed to simplify the process of finding
          high-quality learning resources. FindTheBest aims to provide a
          centralized hub where you can effortlessly discover the most valuable
          and up-to-date video tutorials across the digital landscape.
        </p>
         {/* <div className="d-flex justify-content-around mt-5">
          <button>Frontend</button>
          <button>Backend</button>
          <button>Languages</button>
         </div>
         <div className="d-flex justify-content-around mt-2">
          <button>Open Source</button>
          <button>DevOps</button>
          <button>Graphic Designing</button>
         </div> */}
         <div className="typing-text d-flex justify-content-center pt-5">
         <Sidebar/>
         </div>
        
        </div>
      </div>
    </>
  );
}

export default HomePage;
