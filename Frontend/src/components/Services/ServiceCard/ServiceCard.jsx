import React from "react";
import "./servicecard.css";
const ServiceCard = ({ image, title, description, time }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card service_card_for_box_shadow parent "
              style={{ lineHeight: "20px", height: "430px" }}
            >
              <img
                className="image child"
                src={image}
                alt=""
                style={{ height: "300px" }}
              />
              <h6 className="service_card_title1 px-2 pt-2 mt-1">{title}</h6>
              <p className="service_card_description1 px-2 pt-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
