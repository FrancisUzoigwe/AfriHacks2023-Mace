import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../global/globalState";
const Header = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState<boolean>(false);
  const onClicked = () => {
    setClicked(!clicked);
  };
  const cart = useSelector((prop: any) => prop.cart);
  return (
    <div className="w-full h-[50px] flex items-center justify-center  bg-[#EEEEEE]">
      <div className="w-full h-[50px] items-center justify-center flex fixed bg-[#EEEEEE]">
        <div className="w-[95%] h-[50px] flex justify-between items-center">
          <div className="font-[Zah]">Mace</div>
          <Link
            to="/check"
            className="flex items-center font-[Ever] text-[14px] max-md:hidden"
          >
            <div className="relative">
              <FaOpencart className="text-3xl" />
              <div className="bg-red-600 w-4 h-4 flex justify-center items-center absolute text-[8px] top-0 right-0 rounded-full text-white">
                {cart.length}
              </div>
            </div>
          </Link>
          <div className="hidden max-md:block " onClick={() => {
                onClicked();
              }}>
            <AiOutlineMenu
              className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125 "
              
            />
          </div>
          {clicked ? (
            <motion.div
              className="absolute w-[170px] py-3 mx-5 bg-white  top-10 right-2 rounded-md flex flex-col items-center"
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
            >
              <Link to="/">
                <div className="my-2 ">Products</div>
              </Link>
              <Link to="/check">
                <div className="my-2 ">Cart</div>
              </Link>
              <div
                className="my-2 hover:cursor-pointer"
                onClick={() => {
                  dispatch(dispatch(logOut));
                }}
              >
                Logout
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
