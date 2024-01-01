import React from "react";
import Paragraph from "../../Paragraph";
import { IoIosArrowRoundForward } from "react-icons/io";
import ImageOne from "../../../assets/images/ServicesOne.png";
import Flex from "../../Flex";

const ServiceCard = () => {
  return (
    <div className="max-w-[370px] flex flex-col justify-center items-center px-9 pt-9 pb-14 shadow-xl">
      <img src={ImageOne} alt="" />
      <div className="mt-4 mb-7">
        <h5 className="text-[28px] font-bold text-black font-pop"></h5>
        <Paragraph
          className={`text-center`}
          text={`over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.`}
        />
      </div>
      <Flex className={`items-center align-middle`}>
        <p className="text-lg font-bold align-middle font-nun text-coral">
          Find A Home
        </p>
        <IoIosArrowRoundForward className="mt-1 text-3xl font-bold font-nun text-coral" />
      </Flex>
    </div>
  );
};

export default ServiceCard;
