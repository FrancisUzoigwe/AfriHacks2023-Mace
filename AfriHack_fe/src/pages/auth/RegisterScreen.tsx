import img from "../../../src/assets/pexels-pixabay-50987.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerApi } from "../../apis/authApis";
import LoadingScreen from "../../components/private/LoadingScreen";
import { useDispatch } from "react-redux";
import { loaded } from "../../global/globalState";
const Register = () => {
  const dispatch = useDispatch();
  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  const navigate = useNavigate();
  const model = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    const { userName, email, password } = data;
    registerApi({ email, userName, password })
      .then((res) => {
        navigate("/auth/email");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  });

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className="h-[100vh] w-full object-cover flex justify-center items-center relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          WebkitBackgroundSize: "cover",
        }}
      >
        <form
          className="min-h-[400px] relative w-[500px] rounded-[15px] bg-black opacity-[0.9] p-8 flex  flex-col "
          onSubmit={onSubmit}
        >
          <div className="text-white text-center font-bold text-[20px]">
            Register
          </div>
          <div className="m-2">
            <div className="text-white font-bold">Username</div>
            <input
              placeholder="Who are you?"
              className="w-full h-[40px] outline-none  bg-transparent border-b-2 border-[grey] text-white"
              {...register("userName")}
              type="required"
            />
            {errors.userName?.message && (
              <div className="text-white flex justify-end text-[13px]">
                Add a username for identification
              </div>
            )}
          </div>
          <div className="m-2">
            <div className="text-white font-bold">Email</div>
            <input
              placeholder="Enter your mail address"
              className="w-full h-[40px] outline-none  bg-transparent border-b-2 border-[grey] text-white"
              {...register("email")}
            />
            {errors?.email?.message && (
              <div className="text-white flex justify-end text-[13px]">
                Provide a valid email address
              </div>
            )}
          </div>
          <div className="m-2 ">
            <div className="text-white font-bold">Password</div>
            <div
              className="absolute hover:cursor-pointer transition-all duration-300 hover:scale-110 text-white right-5"
              onClick={() => {
                onEye();
              }}
            >
              {!eye ? (
                <FaEye className="text-2xl" />
              ) : (
                <FaEyeSlash className="text-2xl" />
              )}
            </div>
            <input
              placeholder="Enter a secret"
              type={`${eye ? "text" : "password"}`}
              className="w-full h-[40px] outline-none relative bg-transparent border-b-2 border-[grey] text-white"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-white flex justify-end text-[13px]">
                Provide a password
              </div>
            )}
          </div>
          <div className="flex justify-center items-center mt-3 flex-col text-white">
            <button
              className="bg-green-600 w-[95%] h-[40px] rounded-[20px] text-black text-[20px] font-semibold"
              type="submit"
            >
              Register
            </button>
            <div
              className="text-[13px] mt-2 hover:cursor-pointer"
              onClick={() => {
                dispatch(loaded());
              }}
            >
              Already have an Account ?{" "}
              <Link to="/auth/signin">
                <span className="text-[green] font-bold hover:underline hover:cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
