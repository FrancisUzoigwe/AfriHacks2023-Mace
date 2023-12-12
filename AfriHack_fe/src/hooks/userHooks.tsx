import useSWR from "swr";
import { getSingleUser } from "../apis/userAPI";
import { useSelector } from "react-redux";

export const userHooks = () => {
  const user = useSelector((state: any) => state.user);

  const { data, isLoading } = useSWR(`/${user._id}`, () =>
    getSingleUser(user._id)
  );
  return { data, isLoading };
};
