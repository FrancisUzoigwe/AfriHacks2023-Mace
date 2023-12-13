import { Link } from "react-router-dom";
import headphone from "../../assets/HeadPhone.png";
import Contents from "../../components/private/Contents";
import { motion } from "framer-motion";
import { MdDeliveryDining } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { RiRobot2Fill } from "react-icons/ri";
import image from "../../../src/assets/shoe.webp";
import sandal from "../../../src/assets/sandal.webp";
import gown from "../../../src/assets/gown.webp";
import bag from "../../assets/bag.webp";
import head from "../../assets/HeadPhone.png";
import React from "react";
import Cards from "../../components/private/Cards";
import { Fade } from "react-awesome-reveal";

interface iOffer {
  logo?: any;
  text?: any;
  subText?: any;
}

const Offers: React.FC<iOffer> = ({ logo, text, subText }) => {
  return (
    <>
      <Fade damping={0.5} triggerOnce={true}>
        <div className="flex h-[50px] my-3 mx-2 rounded-md items-center bg-white  justify-around">
          <div className="text-4xl">{logo}</div>
          <div>
            <div className="font-extrabold">{text}</div>
            <div className="text-[12px] font-bold text-gray-400 ">
              {subText}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

const LandingScreen = () => {
  const viral = {
    visible: { x: 0, opacity: 1, transition: { delay: 2 } },
    hidden: { x: "-200px", opacity: 0 },
  };

  return (
    <div className="w-full h-auto flex flex-col items-center bg-[#EEEEEE] ">
      <div className="w-[95%] h-auto rounded-xl flex items-center ">
        <motion.div
          className="flex flex-col ml-14  max-md:ml-3 max-sm:ml-2 w-full h-auto mt-1 "
          variants={viral}
          initial="hidden"
          animate="visible"
        >
          <div className="text-3xl font-bold max-sm:text-[17px] mt-1 max-sm:font-medium">
            Beats Solo
          </div>
          <div className="text-6xl mt-2  max-sm:mt-0  font-extrabold max-sm:text-2xl max-sm:font-extrabold">
            Wireless
          </div>
          <div className="text-[140px] -mt-8 max-sm:mt-0 font-[Zah] rel bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-600 to-black  max-sm:text-[38px] max-md:text-[60px] max-md:mt-0 max-lg:text-[90px] pr-2">
            Headphone
          </div>
          <div className=" right-1/3 flex items-center justify-center max-sm:ml-[30px] -mt-12  max-sm:hidden max-xl:hidden ">
            <img src={headphone} alt="" className=" " />
          </div>
          <div className=" hidden max-md:block max-xl:block ">
            <img src={headphone} alt="" className="" />
          </div>
          <div className="w-full flex justify-between h-[70px] mb-1">
            <div className=" ">
              <Link to="/auth/register">
                <button className="px-5 py-3 rounded-full bg-red-600 text-white max-sm:text-[12px]">
                  Start Shopping
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-end max-md:hidden pr-2 ">
              <div className="font-extrabold hover:cursor-pointer ">
                Description:
              </div>
              <div>
                <div className="text-[14px] font-semibold hover:cursor-pointer font-[Ever]">
                  * Water resistant, durable design
                </div>
                <div className="font-semibold text-[14px] hover:cursor-pointer font-[Ever]">
                  * Up to 48HRs on a single charge
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-3 w-[95%] max-sm:w-[90%] max-md:grid-cols-2 max-sm:grid-cols-1">
        <Contents
          background="bg-white"
          Image={image}
          text="Italian shoes"
          button="Start shopping"
          buttonColor="bg-green-500 "
          buttonTextColor="text-white"
        />
        <Contents
          background="bg-white"
          Image={sandal}
          text="School Sandals"
          button="Start Shopping"
          buttonColor="bg-red-500"
          buttonTextColor="text-white"
        />
        <Contents
          background="bg-white"
          Image={gown}
          text="Cinderella's Gown"
          button="Start Shopping"
          buttonColor="bg-blue-500"
          buttonTextColor="text-white"
        />
        <Contents
          background="bg-white"
          Image={bag}
          text="School Bag"
          buttonColor="bg-red-500"
          buttonTextColor="white"
          button="Get Started"
        />
        <Contents
          background="bg-white"
          Image={head}
          text="Beat's Headphone"
          button="Get Started "
          buttonColor="bg-blue-500"
          buttonTextColor="text-white"
        />
        <Contents
          background="bg-white"
          Image={sandal}
          text="School Sandals"
          button="Start Shopping"
          buttonColor="bg-red-500"
          buttonTextColor="text-white"
        />
      </div>
      <div className="w-[90%] h-auto grid grid-cols-4 max-sm:grid-cols-1 mt-4  max-md:grid-cols-2 gap-2">
        <Offers
          logo={<MdDeliveryDining />}
          text="Free delivery"
          subText="Free delivary on all order"
        />
        <Offers
          logo={<SiAdguard />}
          text="Money Guranteed"
          subText="30 Days money back"
        />
        <Offers
          logo={<BiSupport />}
          text="Online technical support"
          subText="Technical support 24/7"
        />
        <Offers
          text="Secured payment system"
          subText="Ai integrated payment system"
          logo={<RiRobot2Fill />}
        />
      </div>
      <Fade duration={1000} triggerOnce={true}>
        <div className="text-4xl font-bold mt-5 max-sm:text-3xl text-center w-full">
          Current Best Selling Products
        </div>
      </Fade>
      <Fade duration={1000} triggerOnce={true}>
        <div className="text-[14px] text-gray-400 font-bold">
          Available for limited time
        </div>
      </Fade>
      <div className="w-full  mt-3 flex justify-center items-center">
        <div className="w-[90%] grid grid-cols-4 gap-10 max-md:grid-cols-3 max-sm:grid-cols-2 ">
          <Cards Image={gown} price="4,000"/>
          <Cards Image={sandal} price="2,500"/>
          <Cards Image={bag}  price="5,400"/>
          <Cards Image={image} price="3,250"/>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
