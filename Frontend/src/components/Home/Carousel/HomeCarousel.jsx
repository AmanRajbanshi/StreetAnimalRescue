import React from "react";
import NewsletterSignup from "../../NewletterSignup/NewsletterSignup";
import Service from "../../Services/Service/Service";
import UpcomingEventInHome from "../../UpcomingEvent/UpcomingEventInHome";
import Carousell from "../Card/Carousell";
import "./homecarousel.css";
import Footer from "../../Footer/Footer";
const HomeCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide main_carousel_column "
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="first_image "
              style={{ color: "1px solid red" }}
              src="https://fulltimeexplorer.com/wp-content/uploads/2020/06/snehas-care-nepal-dog-rescue-lalitpur-patan.jpg   "
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="second_image"
              src="https://www.snehacare.org/wp-content/uploads/2021/09/IMG_4806-scaled.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="third_image"
              src=" https://www.snehacare.org/wp-content/uploads/2021/07/IMG_1714-scaled.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Service />
      <UpcomingEventInHome />
      <Carousell />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default HomeCarousel;
// "https://res.cloudinary.com/drhgdzba3/image/upload/v1677737630/Street_Animal_Rescue/k53kpm4phaityiva0ov4.png";
