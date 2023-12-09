import SellerHeader from "../static/SellerHeader";
import SellerSider from "../static/SellerSider";
import { Outlet } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div className="w-full flex-col flex">
      <div className="">
        <SellerHeader />
      </div>
      <div className="flex justify-between w-full h-screen">
        <div className="max-sm:hidden">
          <SellerSider />
        </div>
        <div className="w-full bg-red-300 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
