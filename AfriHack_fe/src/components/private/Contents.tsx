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
    <div
      className={`w-full h-auto ${background} rounded-xl flex justify-center`}
    >
      <div className="h-[150px] max-sm:h-[100px] w-full rounded-lg my-3 mx-3 flex  items-center justify-between">
        <div>
          <div className="my-2">{text}</div>
          <div className="my-2">
            <button
              className={`px-5 py-[6px] rounded-full ${buttonColor} ${buttonTextColor} text-[14px]`}
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
  );
};

export default Contents;
