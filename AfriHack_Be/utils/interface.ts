import { Document } from "mongoose";
import { Role } from "../config/role";

interface iUser {
  userName: string;
  email: string;
  password: string;
  verified: boolean;
  token: string;
  role: Role | string;
}


interface iProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  imageID: string;
}

export interface iUserData extends iUser, Document {}
export interface iProductData extends iProduct, Document {}
