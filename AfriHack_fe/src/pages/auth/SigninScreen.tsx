import img from "../../assets/pexels-pixabay-50987.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { signinApi, verifiedApi } from "../../apis/authApis";
import LoadingScreen from "../../components/private/LoadingScreen";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../../global/globalState";
const SigninScreen = () => {
  const { userID } = useParams();
  const [verify, setVerify] = useState<string>("");
  console.log("Verified:", verify);

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.setUser);
  console.log("This is the user:", user);

  const navigate = useNavigate();
  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  useEffect(() => {
    if (userID) {
      const decode: any = jwtDecode(userID);
      setVerify(decode.id);
      verifiedApi(decode.id);
    }
  }, []);

  const model = yup.object({
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
    const { email, password } = data;
    signinApi({ email, password })
      .then((res: any) => {
        dispatch(setUser(res));
      })
      .then(() => {
        navigate("/");
      });
  });

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
          className="min-h-[300px] w-[500px] mx-5 rounded-[15px] bg-black opacity-[0.9] p-8 flex  flex-col relative"
          onSubmit={onSubmit}
        >
          <div className="text-white text-center font-bold text-[20px]">
            Login
          </div>
          <div className="m-2">
            <div className="text-white font-bold">Email</div>
            <input
              placeholder="Enter your mail address"
              className="w-full h-[40px] outline-none  bg-transparent border-b-2 border-[grey] text-white"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-white flex justify-end text-[13px]">
                Provide a valid email address
              </div>
            )}
          </div>
          <div className="m-2">
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
              className="w-full h-[40px] outline-none  bg-transparent border-b-2 border-[grey] text-white"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-white flex justify-end text-[13px]">
                Input your password
              </div>
            )}
          </div>
          <div className="flex justify-center items-center mt-3 flex-col text-white">
            <button
              className="bg-green-600 w-[95%] h-[40px] rounded-[20px] text-black text-[20px] font-semibold"
              type="submit"
            >
              Login
            </button>
            <div className="text-[13px] mt-2">
              Don't have an Account ?{" "}
              <Link to="/auth/register">
                <span className="text-[green] font-bold hover:underline hover:cursor-pointer hover:text-white">
                  Register
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SigninScreen;
