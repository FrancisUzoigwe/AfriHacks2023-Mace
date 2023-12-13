import { Fade } from "react-awesome-reveal";
import vite from "../../../public/vite.svg";
interface iContent {
  background?: string;
  text?: string;
  button?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  Image?: any;
}
const Contents: React.FC<iContent> = ({
  background,
  text,
  button,
  buttonColor,
  buttonTextColor,
  Image,
}) => {
  return (
    <>
      <Fade damping={0.5} triggerOnce={true}>
        <div
          className={`w-full h-auto ${background} rounded-xl flex justify-center`}
        >
          <div className="h-[150px] max-sm:h-[100px] w-full rounded-lg my-3 mx-3 flex  items-center justify-between">
            <div>
              <div className="my-2 uppercase font-[Ever]">{text}</div>
              <div className="my-2">
                <button
                  className={`px-5 py-2 rounded-full ${buttonColor} ${buttonTextColor} text-[14px]`}
                >
                  {button}
                </button>
              </div>
            </div>
            <div className="w-[60%] max-sm:w-[70%] h-full  text-white ">
              <img src={Image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Contents;
