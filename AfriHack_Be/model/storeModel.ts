import { Schema, Types, model } from "mongoose";
import { iStoreData } from "../utils/interface";

const storeModel = new Schema<iStoreData>(
  {
    storeName: {
      type: String,
    },
    userID: {
      type: String,
    },
    products: [
      {
        type: Types.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<iStoreData>("stores", storeModel);
