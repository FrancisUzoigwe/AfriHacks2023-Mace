import { TiArrowForward } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  adminChangedToggle,
  adminToggled,
  createToggle,
} from "../../global/globalState";
import { useState } from "react";
import { IoCreate } from "react-icons/io5";
import { CiViewColumn } from "react-icons/ci";
import CreateScreen from "../../pages/admin/CreateScreen";

const SellerSider = () => {
  const create = useSelector((state: any) => state.create);
  const [toggled, setToggled] = useState<boolean>(false);
  const onToggle = () => {
    setToggled(!toggled);
  };

  const adminToggle = useSelector((state: any) => state.adminToggle);
  const dispatch = useDispatch();
  return (
    <>
      {create && <CreateScreen />}
      <div
        className={`${
          !adminToggle ? "w-[50px]" : "w-[100px] "
        } flex flex-col items-center h-screen`}
      >
        <div className="fixed">
          <div
            className={`${
              !adminToggle ? "w-[50px]" : "w-[100px] "
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
                    className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-125"
                    onClick={() => {
                      dispatch(adminToggled());
                    }}
                  />
                ) : (
                  <TiArrowForward
                    className="text-3xl hover:cursor-pointer transition-all  duration-300 hover:scale-125 rotate-180"
                    onClick={() => {
                      dispatch(adminChangedToggle());
                    }}
                  />
                )}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-start">
              <IoCreate
                className="text-3xl"
                onClick={() => {
                  dispatch(createToggle());
                }}
              />
              {toggled && <div>Create</div>}
            </div>
            <div className="mt-4 flex items-center justify-start">
              <CiViewColumn className="text-3xl" />
              {toggled && <div className="ml-2">View</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerSider;
