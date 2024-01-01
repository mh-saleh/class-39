import React from "react";
import ProfileImage from "../../../assets/images/TestimoniaProfile.png";
import Flex from "../../Flex";

const TestimonialCard = () => {
  return (
    <div className="max-w-[370px] px-9 py-14 shadow-lg rounded-md ">
      <p className="mb-5 text-lg font-normal font-nun text-slate">
        recious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
        veniam, quis nostrud Precious ips um dolor sit amet, consecte
      </p>
      <Flex className={`gap-4 items-center`}>
        <div>
          <img src={ProfileImage} alt="" />
        </div>
        <div>
          <p className="text-base font-medium text-black font-pop">
            William Seklo
          </p>
          <p className="text-sm font-normal font-nun text-slate">
            Estate Agents
          </p>
        </div>
      </Flex>
    </div>
  );
};

export default TestimonialCard;
