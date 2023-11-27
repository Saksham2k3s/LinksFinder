import React, { useContext } from "react";
// import { useRef } from "react";
import HooksContext from "./Context/HooksContext";

import { Link } from "react-router-dom";

function CategoryModal() {
  // const closeRef = useRef(null);
  const context = useContext(HooksContext);
  const { mode, categoryList } = context;
  return (
    <>
      {/* Modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog  modal-dialog-centered`}>
          <div
            className="modal-content"
            style={{
              backgroundColor: `${mode === false ? "white" : "#160133"}`,
            }}
          >
            <div className="d-flex justify-content-between mt-2 px-3">
              <h4
                className={`modal-title ${
                  mode === false ? "darkText" : "lightText"
                }`}
                id="exampleModalLabel"
              >
                Choose The Category
              </h4>
              <i
                type="button"
                className={`fa-solid fa-xmark  ${
                  mode === false ? "darkText" : "lightText"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
            </div>
            <div className="modal-body">
              <div>
                <ul
                  className={`my-4 ${
                    mode === false ? "darkText" : "lightText"
                  }`}
                >
                  {categoryList.map((category) => (
                    <li className=" nav-link modal-options" key={category}>
                      {" "}
                      <Link
                        to={`/category/${category}`}
                        className="text-decoration-none text-reset"
                      >
                        {category}
                      </Link>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryModal;
