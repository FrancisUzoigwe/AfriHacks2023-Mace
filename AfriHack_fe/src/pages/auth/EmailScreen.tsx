import { SiMinutemailer } from "react-icons/si";

const EmailScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full flex  flex-col items-center">
        <div className="animate-pulse">
          <SiMinutemailer className="text-9xl max-sm:text-7xl"/>
        </div>
        <div className="font-[Ever] my-2">Email sent!</div>
        <div className="text-center w-[90%]">
          An email has been sent, check your email for a link to continue
        </div>
      </div>
    </div>
  );
};

export default EmailScreen;
