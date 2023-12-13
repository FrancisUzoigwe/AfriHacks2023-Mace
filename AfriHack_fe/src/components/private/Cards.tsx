import { Fade } from "react-awesome-reveal";

interface iCard {
  title?: string;
  price?: string;
  Image?: string;
}
const Cards: React.FC<iCard> = ({ title, price, Image }) => {
  return (
    <>
      <Fade duration={3000} triggerOnce={true}>
        <div className="flex flex-col h-auto w-auto my-3">
          <div className=" h-[150px] max-sm:h-[100px] rounded-md">
            <img src={Image} alt="" className="w-full h-full object-fit" />
          </div>
          <div className="mt-1">{title}</div>
          <div className="mt-1 font-bold text-red-500">₦{price}</div>
        </div>
      </Fade>
    </>
  );
};

export default Cards;
