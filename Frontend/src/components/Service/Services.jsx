import React from "react";
import "./service.css";
import Footer from "../Footer/Footer";
const Services = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#EFF1F3" }}>
        <div className="container ">
          <div className="row  collecting_street_animal_section">
            <div className="col-md-6 collecting_street_animal_image_section">
              <img
                className="collecting_street_animal_image mt-2"
                style={{ height: "400px" }}
                src="https://www.snehacare.org/wp-content/uploads/2021/09/3d0425ab-1aff-475d-bd46-881c762bb341.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-5 collecting_street_animal_description_section">
              <h3 className="collecting_street_animal_title">Picking Animal</h3>
              <p className="collecting_street_animal_description fs-5">
                Our rescue team assess the situation and determine whether the
                animal needs immediate help or if it can wait until a later
                time. If the animal appears friendly and approachable, our
                rescue team approach it slowly and calmly, avoiding any sudden
                movements that could scare or provoke the animal. The rescue
                team uses proper equipment such as nets, traps, or gloves to
                handle the animal safely.
              </p>
            </div>
          </div>
          <div className="row rescuing_street_animal_section">
            <div className="col-md-6 mt-5 rescuing_street_animal_description_section">
              <h3 className="rescuing_street_animal_title">Rescuing Animal</h3>
              <p className="rescuing_street_animal_description fs-5">
                Once a street animal has been picked up, the rescue process
                continues with providing them with the necessary care and
                support.The rescued animal takes to a veterinarian for a
                check-up and necessary medical treatment. This will ensure that
                any health issues are identified and treated.If the animal is
                sick, injured, or showing signs of disease, they are quarantined
                to prevent the spread of illness.While waiting for a permanent
                home, the rescued animal provide temporary shelter. This is
                provided by our organization, or a foster home. If the animal
                are mistreated or neglected, they are rehabilitated to help them
                overcome any emotional or behavioral issues. This can include
                training and socialization.Once the animal has been medically
                cleared and is ready for adoption, they can be placed in a
                permanent home. This involves screening potential adopters and
                matching them with the right animal.
              </p>
            </div>
            <div className="col-md-6 rescuing_street_animal_image_section">
              <img
                className="rescuing_street_animal_image"
                src="https://res.cloudinary.com/drhgdzba3/image/upload/v1677737630/Street_Animal_Rescue/k53kpm4phaityiva0ov4.png"
                alt=""
              />
            </div>
          </div>
          <div className="row   caring_street_animal_section ">
            <div className="col-md-6 mb-2 caring_street_animal_image_section">
              <img
                className="caring_street_animal_image"
                src="https://www.snehacare.org/wp-content/uploads/2021/09/IMG_6178-scaled.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-5  caring_street_animal_description_section ">
              <h3 className="caring_street_animal_title">Caring Animal</h3>
              <p className="caring_street_animal_description fs-5">
                After rescuing a street animal, providing proper care is
                essential to ensure their health and well-being. The rescued
                animal are provided with a safe, secure, and comfortable
                environment to recover and adapt to their new surroundings. This
                can be a separate room or area in the house or a crate.Provide
                the rescued animal with a balanced diet that is appropriate for
                their species and age. Consult with a veterinarian or animal
                nutritionist to determine the best food options. Regular
                veterinary care is essential to maintain the health of the
                rescued animal. Schedule regular check-ups, vaccinations, and
                preventative care as recommended by the veterinarian.Exercise
                and socialization are essential for the mental and physical
                well-being of the rescued animal. Spend time playing and
                interacting with them, and consider enrolling them in obedience
                or training classes.The rescued animal may have had a difficult
                past, and providing love and attention is essential for building
                trust and creating a bond with them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
