import axios from "axios";

const ProductURL: string = "http://localhost:2345/";
export const viewAllProducts = async (data: any) => {
  try {
    return axios.get(`${ProductURL}/`).then((res: any) => {
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};
