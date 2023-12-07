import FirstHeader from "../static/FirstHeader";
import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FirstLayout;
