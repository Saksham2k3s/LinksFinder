import React, { useState } from "react";
import Coursedata from "./Coursedata";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";

function Cars() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const carsPerPage = 6;

  // Filtering data based on the search query
  const filteredData = Coursedata.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //calculation for pagination
  const idxOfLastCar = currentPage * carsPerPage;
  const idxOfFirstCar = idxOfLastCar - carsPerPage;
  const currdata = filteredData.slice(idxOfFirstCar, idxOfLastCar);

  //Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row coursecontainer px-4">
          {currdata.map((course, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        itemsPerPage={carsPerPage}
        totalItem={filteredData.length}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </>
  );
}

export default Cars;
