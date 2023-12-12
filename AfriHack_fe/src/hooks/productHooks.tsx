import useSWR from "swr";
import { viewAllProducts } from "../apis/productApis";

export const productHooks = () => {
  const { data: products, isLoading } = useSWR(
    `/view-product`,
    viewAllProducts
  );
  return { products, isLoading };
};
