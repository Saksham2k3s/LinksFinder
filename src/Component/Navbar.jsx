import { useContext, useRef } from "react";
import CategoryModal from "./CategoryModal";
import HooksContext from "./Context/HooksContext";

function Navbar() {
  const ref = useRef(null);
  const context = useContext(HooksContext);

  const { mode, toggleMode } = context;
  console.log(mode);

  return (
    <>
      <nav
        className="px-3 py-2"
        style={{ background: `${mode === true ? "#160133" : "white"}` }}
      >
        <div className="navbar ">
          <div className="nav-brand">
            <a href="/LinksFinder">
              <span
                className={`simple-text ${
                  mode === false ? "darkText" : "lightText"
                }`}
              >
                Links
              </span>
              <span className="special-text">Finder</span>
            </a>
          </div>
          <div className="category ">
            <ul className="ms-auto  d-flex ">
              <li className="nav-link mx-3" onClick={toggleMode}>
                <img
                  src={
                    mode === false
                      ? "https://cdn-icons-png.flaticon.com/128/867/867904.png"
                      : "https://cdn-icons-png.flaticon.com/128/2698/2698194.png"
                  }
                  alt=""
                />
              </li>
              <li className="nav-link">
                <button
                  ref={ref}
                  type="button"
                  className="btn px-1" // Make sure the button is visible
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Category
                  <i className="fa-solid fa-caret-down px-1"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}

      <CategoryModal />
    </>
  );
}

export default Navbar;
