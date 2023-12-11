import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../static/Header";
import Sider from "../static/Sider";

const SellerLayout = () => {
  const buyer = useSelector((state: any) => state.buyerToggle);
  return (
    <div className="w-full flex-col flex">
      <div className="">
        <Header />
      </div>
      <div className="flex justify-between w-full h-screen">
        <div
          className={`${!buyer ? "50px" : "w-[100px] "} max-md:hidden `}
        >
          <Sider />
        </div>
        <div className="w-full h-full px-2  bg-[#EEEEEE]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
