import React from "react";
import Bed from "../../icons/Bed";
import ImageOne from "../../../assets/images/PropertiesOne.png";
import Flex from "../../Flex";
import ProfileImage from "../../../assets/images/PropertyProfile.png";
import ReactionImage from "../../../assets/images/PropertyReaction.png";

const PropertyCard = () => {
  return (
    <div className="max-w-[427px] shadow-xl">
      <img src={ImageOne} alt="" className="w-full" />
      {/* First div starts*/}
      <div className="pr-[109px] mt-6 mb-5 ml-6">
        {/* price */}
        <p className="text-lg font-medium font-pop text-coral">
          $ 349,00/Month
        </p>
        {/* price */}
        {/* title */}

        <h6 className="my-2 font-bold text-black text-twentyTwo font-pop">
          New Apartment Nice View
        </h6>
        {/* title */}
        {/* description */}
        <p className="mb-6 text-sm font-normal font-nun text-slate ">
          Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated
          With New Wood
        </p>
        {/* description */}

        {/* Details */}
        <Flex className={`gap-3`}>
          <div className="border-r inline-block pr-2 border-[#707070]">
            <Flex className={`gap-1`}>
              <p className="text-sm font-medium font-pop text-midnight">3</p>
              <Bed />
            </Flex>
            <p className="text-xs font-light font-nun text-slate"> Beedrooms</p>
          </div>
          <div className="border-r inline-block pr-2 border-[#707070]">
            <Flex className={`gap-1`}>
              <p className="text-sm font-medium font-pop text-midnight">3</p>
              <Bed />
            </Flex>
            <p className="text-xs font-light font-nun text-slate"> Beedrooms</p>
          </div>
          <div className="inline-block ">
            <Flex className={`gap-1`}>
              <p className="text-sm font-medium font-pop text-midnight">3</p>
              <Bed />
            </Flex>
            <p className="text-xs font-light font-nun text-slate"> Beedrooms</p>
          </div>
        </Flex>
        {/* Details */}
      </div>

      {/* First div ends */}
      <Flex
        className={`justify-between px-6 pt-4 pb-7 items-center border-t border-[#C1C1C1]`}
      >
        <Flex className={`gap-1`}>
          <div>
            <img src={ProfileImage} alt="" />
          </div>
          <div>
            <p className="text-sm font-medium text-black font-pop">
              William Seklo
            </p>
            <p className="text-[9px] font-normal font-nun text-slate">
              Estate Agents
            </p>
          </div>
        </Flex>
        <div>
          <img src={ReactionImage} alt="" />
        </div>
      </Flex>
    </div>
  );
};

export default PropertyCard;
