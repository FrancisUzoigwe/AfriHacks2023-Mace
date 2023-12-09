import { Fade } from "react-awesome-reveal";
const Cards = () => {
  return (
    <>
      <Fade duration={3000} triggerOnce={true}>
        <div className="flex flex-col h-auto w-auto my-3">
          <div className=" h-[150px] max-sm:h-[100px] bg-gray-500 rounded-md">
            Hello
          </div>
          <div className="mt-1">Beats</div>
          <div className="mt-1 font-bold text-red-500">₦2,000</div>
        </div>
      </Fade>
    </>
  );
};

export default Cards;
