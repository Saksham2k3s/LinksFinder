import React from "react";
import { Link } from "react-router-dom";
import { useContext} from "react";
import HooksContext from "./Context/HooksContext";
function LinksCard(props) {
  const context = useContext(HooksContext);
  const { mode } = context;
  const { name, description, url,  } = props.links;
 
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  }

  //Sharing functionality

  const handleShare = async () =>{
  try {
    if(navigator.share){
      await navigator.share({
        url: url
      })
    }
    else{
      alert('link is not sharable');
    }
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <>
      <div
        className={`card pb-4 link-card mt-4 ${
          mode === false ? "backgroundLight" : "backgroundDark"
        }`}
      >
        <div className="card-body h-100">
          <div className=" d-flex justify-content-around mx-1">
            <div className="name h4">{name}</div>
            <i className={`fa-regular fa-copy  ${mode === false ? "darktext": "lightText"}`} onClick={handleCopy} ></i>
            <i className={`fa-solid fa-share-nodes  ${mode === false ? "darktext": "lightText"}`} onClick={handleShare}></i>
     
          </div>
          <div
            className={` mt-3 h-50 ${mode === false ? "darkText" : "lightText"}`}
          >
            {description}
          </div>
          <Link to={url} target="_blank ">
            {" "}
            <button className="w-100 mt-3">
              Visit Site <i class="fa-solid fa-link"></i>
            </button>
          </Link>
        </div>
        
      </div>
    </>
  );
}

export default LinksCard;