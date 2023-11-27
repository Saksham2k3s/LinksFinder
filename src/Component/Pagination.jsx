import React from "react";

function Pagination({ itemsPerPage, totalItem, currentPage, onPageChange }) {
  const pageNumber = [];

  //loop for pages
  for (let i = 1; i <= Math.ceil(totalItem / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <nav className="ms-auto">
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => {
                  onPageChange(number);
                }}
                className={`page-link ${
                  currentPage === number ? "active" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
