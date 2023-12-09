import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeToggle } from "../../global/globalState";

const AskScreen = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-[100vh] z-50 flex items-center justify-center absolute"
      style={{ backdropFilter: "blur(20px)" }}
      onClick={() => {
        dispatch(changeToggle());
      }}
    >
      <div className="min-w-[310px] mx-1 h-screen flex items-center justify-between">
        <Link to="/store/owner">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full border border-black"></div>
            <div className="font-[Zah] mt-8 ">Retailer</div>
          </div>
        </Link>
        <Link to="/auth/signin">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full border border-black"></div>
            <div className="font-[Zah] mt-8 ">Buyer</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AskScreen;
