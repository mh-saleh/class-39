import React from "react";
import ImageOne from "../../../assets/images/FeaturedCar.png";
import ImageTwo from "../../../assets/images/FeaturedArrow.png";
import RighArrow from "../../icons/RighArrow";

const FeaturedCard = () => {
  return (
    <div className="relative max-w-[270px]  shadow-xl text-center rounded-xl hover:bg-coral group pt-6 pb-14">
      <img
        src={ImageOne}
        alt=""
        className="mx-auto rounded-full group-hover:bg-white"
      />
      <p className="mt-4 font-bold text-black text-twentyTwo font-pop group-hover:text-white">
        Parking Space
      </p>
      <div
        className={`absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] `}
      >
        <RighArrow className={` `} />
      </div>
    </div>
  );
};

export default FeaturedCard;
