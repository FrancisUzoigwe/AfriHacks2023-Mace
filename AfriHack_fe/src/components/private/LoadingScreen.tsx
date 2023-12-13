import { BallTriangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="">
      <div
        className="w-full h-screen flex items-center justify-center flex-col "
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
        <div className="mt-10 font-[Zah]">Getting datas....</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
