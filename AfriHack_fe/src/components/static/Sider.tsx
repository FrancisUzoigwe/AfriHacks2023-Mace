import { TiArrowForward } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyerChangedToggle, buyerToggle } from "../../global/globalState";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { CiViewColumn } from "react-icons/ci";

const Sider = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const onToggle = () => {
    setToggled(!toggled);
  };

  const buyer = useSelector((state: any) => state.buyer);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        !buyer ? "w-[50px]" : "w-[100px] "
      } flex flex-col items-center h-screen`}
    >
      <div className="fixed">
        <div
          className={`${
            !buyer ? "w-[50px]" : "w-[100px] "
          } flex flex-col items-center h-screen bg-[#EEEEEE]`}
        >
          <div className="w-full items-center flex justify-end ">
            <div
              className=""
              onClick={() => {
                onToggle();
              }}
            >
              {!toggled ? (
                <TiArrowForward
                  className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-125 "
                  onClick={() => {
                    dispatch(buyerToggle());
                  }}
                />
              ) : (
                <TiArrowForward
                  className="text-3xl hover:cursor-pointer transition-all  duration-300 hover:scale-125 rotate-180"
                  onClick={() => {
                    dispatch(buyerChangedToggle());
                  }}
                />
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-start">
            <FiShoppingBag className="text-2xl" />
            {buyer && <div>Products</div>}
          </div>
          <div className="mt-4 flex items-center justify-start">
            <CiViewColumn className="text-3xl" />
            {buyer && <div className="ml-2">See All</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
