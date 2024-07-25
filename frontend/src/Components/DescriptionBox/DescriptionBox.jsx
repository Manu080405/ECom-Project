import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          All the products are made from high quality are selled by trusted and authorized seller.
        </p>
        <p>
          Contact supporting care for any issues faced.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
