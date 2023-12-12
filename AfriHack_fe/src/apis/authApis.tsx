import axios from "axios";
const URL: string = "http://localhost:2345/api";

export const registerApi = async (data: any) => {
  try {
    return axios.post(`${URL}/create-user`, data).then((res: any) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const signinApi = async (data: any) => {
  try {
    return axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const verifiedApi = async (userID: any) => {
  try {
    return axios.patch(`${URL}/${userID}/verify-user`).then((res: any) => {
      return res.data?.data
    })
  } catch (error: any) {
    console.log(error?.message);
  }
};
