import axios from "axios";

export const getSingleUser = async (userID: string) => {
  try {
    return await axios.get(`/${userID}`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
