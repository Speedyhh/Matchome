import React from "react";
import TimDetails1 from "@/images/services/tim1.jpg";
import Img from "./img";
import ContactThree from "./contact-three";
import ContactMain from "./contact-main";

const TimPost = () => {
  return (
    <div className="service_details_left">
      <div className="image">
        <Img src={TimDetails1} alt="Spalletti" />
      </div>
      <ContactThree />
    </div>
  );
};

export default TimPost;
