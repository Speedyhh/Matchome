import { FeatureOneData } from "@/data";
import React from "react";

const FeatureOne = () => {
  return (
   
    <div className="feature_service_area text-center">
   
      {FeatureOneData.map(({ icon, title,url,text }, index) => (
        
        <div className="feature_service_box_width" key={`feature-one-${index}`}>
          
          <i className={icon}></i>
          <a href={url}>
          <p>{title}</p>
          <br></br>
          <p style={{fontSize:"15px"}}>{text}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureOne;
