import React from "react";
import iconOne from "../../../../assets/images/AboutIcon.png";

const AboutCard = () => {
  return (
    <div className="inline-block py-16 text-center cursor-pointer px-14 hover:shadow-xl">
      <img src={iconOne} alt="" className="mx-auto" />
      <div className="mt-8">
        <h6 className="font-bold text-black text-fourtyTwo font-pop">560</h6>
        <p className="mt-1 text-xl font-bold font-nun text-slate">
          Total Area Sq
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
