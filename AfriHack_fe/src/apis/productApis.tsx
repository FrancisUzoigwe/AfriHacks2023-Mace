import axios from "axios";

const ProductURL: string = "https://teammace.onrender.com";


export const viewAllProducts = async () => {
  try {
    return axios.get(`${ProductURL}/api/view-product`).then((res: any) => {
      console.log(res)
      return res.data?.data;
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};
