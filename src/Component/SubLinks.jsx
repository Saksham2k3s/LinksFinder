import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkData from "../Data/LinkData.json";
import LinksCard from "../Component/LinksCard";
function SubLinks() {
  const { name } = useParams();
  const [SubLinks, setSubLinks] = useState([]);

  useEffect(() => {
    const filterSubLinks = LinkData.filter((link) => link.subj === name);
    setSubLinks(filterSubLinks);
  }, [name]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {SubLinks.map((links, idx) => (
            <div className="col-md-4" key={idx}>
              <LinksCard links={links} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SubLinks;
