import SellerHeader from "../static/SellerHeader";
import SellerSider from "../static/SellerSider";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SellerLayout = () => {
  const adminToggle = useSelector((state: any) => state.adminToggle);
  return (
    <div className="w-full flex-col flex">
      <div className="">
        <SellerHeader />
      </div>
      <div className="flex justify-between w-full h-screen">
        <div
          className={`${!adminToggle ? "50px" : "w-[100px] "} max-sm:hidden `}
        >
          <SellerSider />
        </div>
        <div className="w-full h-[120vh] bg-red-300 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
