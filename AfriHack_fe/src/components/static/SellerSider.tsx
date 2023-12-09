import { TiArrowForward } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adminChangedToggle, adminToggled } from "../../global/globalState";
import { useState } from "react";

const SellerSider = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const onToggle = () => {
    setToggled(!toggled);
  };

  const adminToggle = useSelector((state: any) => state.adminToggle);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        !adminToggle ? "50px" : "w-[100px] "
      } flex flex-col items-center`}
    >
      {/* <div className="font-[Zah] mt-5 flex-wrap  text-cente">Macead</div> */}
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
              className="text-3xl hover:cursor-pointer transition-all  duration-300 hover:scale-125"
              onClick={() => {
                dispatch(adminChangedToggle());
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerSider;
