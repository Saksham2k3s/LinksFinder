import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import HooksContext from './Context/HooksContext';
function CourseCard(props) {

  const context = useContext(HooksContext);
  const { mode } = context;
  const { name, image, duration, description,category } = props.course;
  return (
   <>
 
 <div className="card my-4  " >

 <img className="card-img-top" src={image} alt={name} />
  <div className={`card-body ${mode === false ? "backgroundLight": "backgroundDark"}`}>
  <div className={`d-flex justify-content-between ${mode === false ? "darkText": "lightText"}`}>
  <h4 className="card-title">{name}</h4>
  <h6><i class="fa-regular fa-clock"></i> {duration}</h6>
    </div>

    <p className={`card-text ${mode === false ? "darkText": "lightText"}`}>{description}</p>
    <div className=' sitesbtn '>
    <Link to={`/${category}/${name}`} className="btn w-100"><i class="fa-brands fa-youtube"></i> View Best Sites</Link>
    </div>
  </div>
</div>
   </>
  )
}

export default CourseCard