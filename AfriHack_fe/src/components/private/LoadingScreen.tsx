import { BallTriangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div
      className="w-full h-screen flex items-center absolute z-[500] justify-center flex-col "
      style={{ backdropFilter: "blur(4px)" }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
      <div className="mt-10 font-[Zah] text-white">Getting datas....</div>
    </div>
    // </div>
  );
};

export default LoadingScreen;
