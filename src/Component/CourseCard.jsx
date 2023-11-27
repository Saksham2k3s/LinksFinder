import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HooksContext from "./Context/HooksContext";
import StyledModal from "./StyledModal";

function CourseCard(props) {
  const context = useContext(HooksContext);
  const { mode } = context;
  const { name, image, duration, description, category } = props.course;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderDescription = () => {
    const truncatedDescription =
      description.length > 160
        ? `${description.substring(0, 134)}...`
        : description;

    return (
      <div className={`card-text ${mode === false ? "darkText" : "lightText"}`}>
        <p>
          {truncatedDescription}
          {description.length > 160 && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpen();
              }}
            >
              Read more
            </a>
          )}
        </p>
        {open && (
          <StyledModal
            children={<p>{description}</p>}
            title={"Course Details"}
            isOpen={open}
            onClose={handleClose}
            footer={<button onClick={handleClose}>Close</button>}
          />
        )}
      </div>
    );
  };

  return (
    <div
      className={`card my-4 ${
        mode === false ? "backgroundLight" : "backgroundDark"
      }`}
    >
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <div
          className={`d-flex justify-content-between ${
            mode === false ? "darkText" : "lightText"
          }`}
        >
          <h4 className="card-title">{name}</h4>
          <h6>
            <i className="fa-regular fa-clock"></i> {duration}
          </h6>
        </div>
        {renderDescription()}
        <div className="sitesbtn">
          <Link to={`/${category}/${name}`} className="btn w-100">
            <i className="fa-brands fa-youtube"></i> View Best Sites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
