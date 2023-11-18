import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import CategoryData from "../Data/CategoryData.json";


function Search() {
  const [search, setSearch] = useState(""); // Add state for the search term
  const navigate = useNavigate();  // Initialize useNavigate

  const onchange = (e) => {
    setSearch(e.target.value);
   
  };

  const handleSearch = () => {
    let foundCourse = CategoryData.find(
      (course) => course.name.toLowerCase() === search.toLowerCase()
    );
  
    if (foundCourse) {
      // Use navigate to programmatically navigate
      navigate(`/${foundCourse.category}/${foundCourse.name}`);
    } else {
      navigate('/nofound')
    }
  };

  return (
    <>
      <div className="container">
        <div className=" mt-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form className="form-inline my-2 my-lg-0 px-5 ">
                <div className="search-input d-flex justify-content-around">
                  <input
                    className="form-control mr-sm-2 search-container"
                    type="search"
                    name="search"
                    value={search}
                    placeholder="Search by course name"
                    aria-label="Search"
                    onChange={onchange}
                  />
                  <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={handleSearch}
                  ></i>
                </div>
                {/* Search input end */}
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

                   
