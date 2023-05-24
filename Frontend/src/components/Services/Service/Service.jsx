import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./service.css";
const Service = () => {
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-8 ">
          <h4 className="our_service_title_in_home_page ">Our Services</h4>
          <p className="service_description ">
            Serving street animals is a noble act of kindness and compassion. It
            is a selfless act that can make a significant difference in the
            lives of these animals who are often neglected and ignored. By
            providing them with basic necessities such as food, water, shelter,
            and medical care, you can help to alleviate their suffering and
            improve their quality of life. Moreover, serving street animals also
            benefits our communities by reducing the population of stray animals
            and promoting a healthier environment. It is crucial to remember
            that street animals are not disposable and that they deserve respect
            and love just like any other animal. By serving them, we not only
            help them but also become better humans by practicing empathy,
            compassion, and kindness towards all living beings.
          </p>
        </div>
        <div
          className="col-md-10 service_card_container"
          style={{
            textAlign: "start",
          }}
        >
          <div className="row service_card_full ">
            <div className="col-md-4 service_card_column ">
              <ServiceCard
                image={
                  "https://fulltimeexplorer.com/wp-content/uploads/2020/06/Together-for-Paws-Rescuing-Dogs-in-Nepal.jpg"
                }
                title={"Picking Animal"}
                description={"Contact us help to pick a new animal rescue"}
                time={"12 Apr,2022"}
              />
            </div>
            <div className="col-md-4 service_card_column mb-2">
              <ServiceCard
                image={
                  "https://fulltimeexplorer.com/wp-content/uploads/2020/06/KAT-Centre-Kathmandu-Nepal-2.jpg"
                }
                title={"Rescuing Animals"}
                description={
                  "Once a street animal has been picked up, the rescue process continues with providing them with the necessary care and support."
                }
                time={"12 Apr,2022"}
              />
            </div>
            <div className="col-md-4 ">
              <ServiceCard
                image={
                  "https://fulltimeexplorer.com/wp-content/uploads/2020/06/snehas-care-nepal-dog-rescue-lalitpur-patan.jpg"
                }
                title={"Caring Animal"}
                description={
                  "After rescuing a street animal, providing proper care is essential to ensure their health and well-being."
                }
                time={"12 Apr,2022"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
