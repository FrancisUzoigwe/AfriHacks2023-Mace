import { Link } from "react-router-dom";
import headphone from "../../assets/HeadPhone.png";

const LandingScreen = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-[#EEEEEE]">
      <div className="w-[95%] h-auto rounded-xl flex items-center">
        <div className="flex flex-col ml-14 max-md:ml-3 w-full h-auto ">
          <div className="text-3xl font-bold max-sm:text-[17px] mt-1 max-sm:font-medium">
            Beats Solo
          </div>
          <div className="text-6xl mt-2  max-sm:mt-0  font-extrabold max-sm:text-2xl max-sm:font-extrabold">
            Wireless
          </div>
          <div className="text-[140px] -mt-8 max-sm:mt-0 font-[Zah]  text-gray-400  max-sm:text-[38px] max-md:text-[60px] max-lg:text-[90px] pr-2">
            Headphone
          </div>
          <div className=" right-1/3 flex items-center justify-center max-sm:ml-[30px] -mt-12   max-sm:hidden max-xl:hidden ">
            <img src={headphone} alt="" className=" " />
          </div>
          <div className=" hidden max-md:block max-xl:block ">
            <img src={headphone} alt="" className=" " />
          </div>
          <div className="w-full flex justify-between h-[70px] mb-1">
            <div className=" mt-2">
              <Link to="/auth/register">
                <button className="px-5 py-3 rounded-full bg-red-600 text-white max-sm:text-[12px]">
                  Start Shopping
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-end max-md:hidden pr-2 ">
              <div className="font-extrabold hover:cursor-pointer ">
                Description
              </div>
              <div>
                <div className="text-[14px] font-semibold hover:cursor-pointer font-[Ever]">
                  * Water resistant, durable design
                </div>
                <div className="font-semibold text-[14px] hover:cursor-pointer font-[Ever]">
                  * Up to 24
                  <span className="font-[Zah] ">hrs</span> on a single charge
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
