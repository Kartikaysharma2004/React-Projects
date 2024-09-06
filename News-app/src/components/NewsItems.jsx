import React from 'react';
import './NewsItems.css'; 

const NewsItems = ({ title = "No title", description = "No description", src = "public/default-image.png", url = "#" }) => {
    return (
      <div className="card" style={{ maxWidth: "345px" }}>
        <img src={src || "public/default-image.png"} className="card-img-top" alt="News image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn bg-danger text-white">Read More</a>
        </div> 
      </div>
    );
}

export default NewsItems;
