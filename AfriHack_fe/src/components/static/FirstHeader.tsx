import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import AskScreen from "../../pages/auth/AskScreen";
import { toggled } from "../../global/globalState";

const FirstHeader = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  return (
    <>
      {toggle && <AskScreen />}
      <div className="w-full h-[50px] flex items-center justify-center  bg-[#EEEEEE] relative">
        <div className="w-full h-[50px] items-center justify-center flex fixed bg-[#EEEEEE]">
          <div className="w-[95%] h-[50px] flex justify-between items-center">
            <div className="font-[Zah]">Mace</div>
            <div className="flex items-center font-[Ever] text-[14px] max-md:hidden">
              <div
                className="ml-5 cursor-pointer "
                onClick={() => {
                  dispatch(toggled());
                }}
              >
                Get Started
              </div>
            </div>
            <div className="hidden max-md:block">
              <AiOutlineMenu
                className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125"
                onClick={() => {
                  dispatch(toggled());
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstHeader;
