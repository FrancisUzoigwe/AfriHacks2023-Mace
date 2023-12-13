import axios from "axios";

const URL: string = "https://api.us-east-1-main.seon.io/SeonRestService/fraud-api/v2/";
console.log(typeof URL);

export const getApproved = async (data: {}) => {
  try {
    return await axios.post("http://localhost:2345/approved", data);
  } catch (error) {
    return error;
  }
};
