import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeToggle } from "../../global/globalState";
import vendor from "../../assets/Business.svg";
import pocurer from "../../assets/Buyer.svg";

const AskScreen = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-full z-50 flex items-center justify-center absolute top-0 right-0"
      style={{ backdropFilter: "blur(20px)" }}
      onClick={() => {
        dispatch(changeToggle());
      }}
    >
      <div className="min-w-[310px] mx-1 h-screen flex items-center justify-between">
        <Link to="/store/owner">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full border overflow-hidden border-black">
              <img
                src={vendor}
                alt="Vendor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-[Zah] mt-8 ">vendor</div>
          </div>
        </Link>
        <Link to="/auth/signin">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full border  overflow-hidden border-black">
              <img
                src={pocurer}
                alt="Vendor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-[Zah] mt-8 ">Procurer</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AskScreen;
