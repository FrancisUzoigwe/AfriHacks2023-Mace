import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div className="w-full flex-col flex">
      <div className="max-sm:hidden">
        <Header />
      </div>
      <div className="flex justify-between w-full">
        <div className="">
          <Sider />
        </div>
        <div className="w-full bg-red-300 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
