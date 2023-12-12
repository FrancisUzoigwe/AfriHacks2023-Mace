import axios from "axios";

const URL = "https://api.us-east-1-main.seon.io/SeonRestService/fraud-api/v2/";

export const getApproved = async () => {
  try {
    return await axios.post("http://localhost:2345/approved", {
      name: "Peter",
      email: "peterotunuya2@gmail.com",
      ip: "102.88.63.34",
      bin: "506115",
    });
  } catch (error) {
    return error;
  }
};
