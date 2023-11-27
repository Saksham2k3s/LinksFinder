import React from "react";
import { useContext } from "react";
import HooksContext from "./Context/HooksContext";
import { Link } from "react-router-dom";
function Footer() {
  const context = useContext(HooksContext);
  const { mode } = context;
  return (
    <>
      <footer
        className="px-3 py-2 mt-5 pt-5"
        style={{ background: `${mode === true ? "#160133" : "white"}` }}
      >
        <div className="container">
          <div className="github-icon text-center">
            <i
              className={`fa-brands fa-github text-${
                mode === false ? "dark" : "light"
              }`}
            ></i>
          </div>
          <div className="footerText text-center mt-3">
            <span className={`${mode === false ? "darkText" : "lightText"}`}>
              Developed By
            </span>{" "}
            <Link
              className="ourname"
              to="https://github.com/Saksham2k3s"
              target="_blank"
            >
              Saksham
            </Link>{" "}
            <span className={`${mode === false ? "darkText" : "lightText"}`}>
              and
            </span>{" "}
            <Link to="#" target="_blank" className="ourname">
              Open Source Community
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
