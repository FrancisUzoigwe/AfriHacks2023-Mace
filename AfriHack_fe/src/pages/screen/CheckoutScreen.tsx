import { AiFillDelete, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeQTYfromCart,
} from "../../global/globalState";
import { useState } from "react";

const CheckoutScreen = () => {
  const cart = useSelector((state: any) => state.cart);

  const [approved, setApproved] = useState<boolean>(false);

  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-10 ">
        <div className="w-full flex justify-center mb-8 ">
          <div className="w-[95%] border border-black rounded-md p-3">
            <div className="my-5">Shopping Cart</div>
            <div>
              {cart?.map((props: any) => (
                <div>
                  <hr className="my-2" />
                  <div className="flex items-center">
                    <img
                      className="w-[150px] max-sm:w-[80px] max-sm:h-[80px] h-[150px] object-cover mr-6 max-sm:mr-3"
                      src={props.image}
                    />

                    <div className="w-[300px]">
                      <div className="font-bold">{props?.name}</div>
                      <div>₦{props?.price}</div>
                    </div>

                    <div className=" mr-12 flex items-center border ">
                      <div className="mx-4">{props?.QTY}</div>
                      <div>
                        <div
                          className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg]"
                          onClick={() => {
                            dispatch(addToCart(props));
                          }}
                        >
                          <AiOutlineRight />
                        </div>

                        <div
                          className="border-r-0 border-l-2 p-2 rotate-90 border border-t-0 "
                          onClick={() => {
                            dispatch(removeQTYfromCart(props));
                          }}
                        >
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center max-md:flex-col">
                      <div className=" mr-8 max-sm:mr-0 font-bold max-sm:my-1">
                        ₦{props.cost * props.QTY}
                      </div>
                      <div
                        className="hover:cursor-pointer"
                        onClick={() => {
                          dispatch(removeFromCart(props));
                        }}
                      >
                        <AiFillDelete size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mb-8 ">
          <div className="w-[95%] border rounded-md p-3 ">
            <div className="flex justify-between items-center">
              <div>{cart?.length}Items </div>
              <div>
                ₦
                {cart?.map((props: number) => {
                  {
                    cart?.reduce(
                      (a: number | any, b: number | any) =>
                        a.cost * a.QTY + b.cost * b.QTY,
                      0
                    );
                  }
                })}
              </div>
            </div>

            <button className="bg-black text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] ">
              Checkout
            </button>

            {approved ? (
              <div className="flex flex-col items-center mt-3">
                <button className="bg-green-400 text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] ">
                  Continue
                </button>
                <span className="text-[14px] mt-2">
                  You have a good credit score 😊😊😊
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center mt-3">
                <button className="bg-red-400 text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] ">
                  Failed!!!
                </button>
                <span className="text-[14px] mt-2">
                  You have a bad credit score..
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutScreen;
