import { AiFillDelete, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeQTYfromCart,
} from "../../global/globalState";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";

const CheckoutScreen = () => {
  const cart = useSelector((state: any) => state.cart);
  const user = useSelector((state: any) => state.user);

  const [ip, setIP] = useState<string>("");
  console.log(typeof ip);

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const [state, setState]: any = useState();
  console.log(typeof setState);

  const dispatch = useDispatch();

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount:
      cart
        ?.map((props: any) => {
          return props.price * props.QTY;
        })
        .reduce((a: number | any, b: number | any) => {
          return a + b;
        }, 0) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_live_94202d87146f507395f1045612cc6d0ec3a4fd29",
  };

  // you can call this function anything
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(Date.now());
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

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
                        ₦{(props.price * props.QTY).toLocaleString()}
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
                {cart
                  ?.map((props: any) => {
                    return props.price * props.QTY;
                  })
                  .reduce((a: number | any, b: number | any) => {
                    return a + b;
                  }, 0)
                  .toLocaleString()}
              </div>
            </div>

            {/* <button
              className="bg-black text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] "
              // onClick={() => {
              //   getApproved({
              //     name: user?.userName,
              //     email: user?.email,
              //     ip,
              //     bin:"",
              //   }).then((res: any) => {
              //     setState(res.data.data.data);
              //   });
              // }}
            >
              Checkout
            </button> */}

            {state && (
              <div>
                {state.state === "APPROVE" ? (
                  <div
                    className="flex flex-col items-center mt-3"
                    onClick={() => {
                      initializePayment(onSuccess, onClose);
                    }}
                  >
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutScreen;
