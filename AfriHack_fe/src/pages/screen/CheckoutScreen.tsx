import { AiFillDelete, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import vite from "../../../public/vite.svg";

const CheckoutScreen = () => {
  return (
    <div className="mt-10 ">
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border border-black rounded-md p-3">
          <div className="my-5">Shopping Cart</div>

          <hr />

          <div>
            <div className="flex items-center">
              <img
                className="w-[150px] max-sm:w-[80px] max-sm:h-[80px] h-[150px] object-cover mr-6 max-sm:mr-3"
                src={vite}
              />

              <div className="w-[300px]">
                <div className="font-bold">TItle</div>
                <div>₦3,000</div>
              </div>

              <div className=" mr-12 flex items-center border ">
                <div className="mx-4">2</div>
                <div>
                  <div className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg]">
                    <AiOutlineRight />
                  </div>

                  <div className="border-r-0 border-l-2 p-2 rotate-90 border border-t-0 ">
                    <AiOutlineRight />
                  </div>
                </div>
              </div>

              <div className="flex items-center max-md:flex-col">
                <div className=" mr-8 max-sm:mr-0 font-bold max-sm:my-1">
                  ₦3,000
                </div>
                <div className="hover:cursor-pointer">
                  <AiFillDelete size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border rounded-md p-3 ">
          <div className="flex justify-between items-center">
            <div>2 Items</div>
            <div>
              ₦
              {/* {cart?.reduce(
                (a: number | any, b: number | any) =>
                  a.cost * a.QTY + b.cost * b.QTY,
                0
              )} */}
            </div>
          </div>

          <Link to="/validator">
            <button className="bg-black text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
