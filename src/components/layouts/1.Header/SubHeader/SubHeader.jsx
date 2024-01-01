import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Flex from "../../../Flex";
import Button from "../../../Button";
import Container from "../../../Container";

const SubHeader = () => {
  return (
    <section className="bg-midnight">
      <Container>
        <Flex className={`justify-between items-center`}>
          <Flex className={`items-center`}>
            <Flex
              className={`items-stretch align-middle gap-2 border-r border-white pr-3`}
            >
              <IoLocationOutline className="text-base text-white" />
              <p className="text-sm font-normal text-white font-nun">
                254 Lillian Blvd, Holbrook
              </p>
            </Flex>
            <Flex className={`items-center align-middle gap-2 ml-3`}>
              <MdOutlineMail className="text-base text-white" />
              <p className="text-sm font-normal text-white font-nun">
                info@santizex-site.com
              </p>
            </Flex>
          </Flex>

          <div>
            <Button text={`Add Listings`} className={`px-6 py-4`} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default SubHeader;
