import { Document } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  verified: boolean;
  token: string;
  role: string;
}

interface iStoreOwner {
  userName: string;
  email: string;
  password: string;
  verified: boolean;
  token: string;
  store: {}[];
  role: string;
}

interface iProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  imageID: string;
}

export interface iUserData extends iUser, Document {}
export interface iStoreOwnerData extends iStoreOwner, Document {}
export interface iProductData extends iProduct, Document {}
