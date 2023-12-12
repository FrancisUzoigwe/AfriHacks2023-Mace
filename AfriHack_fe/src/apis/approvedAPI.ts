import axios from "axios";

const URL = "https://api.us-east-1-main.seon.io/SeonRestService/fraud-api/v2/";

export const getApproved = async (data:{}) => {
  try {
    return await axios.post("http://localhost:2345/approved", data);
  } catch (error) {
    return error;
  }
};
