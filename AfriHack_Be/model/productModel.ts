import { Schema } from "mongoose";
import { iProductData } from "../utils/interface";


const productModel = new Schema<iProductData>({
    name: {
    type: String,
    },
    price: {
        type: Number,
    },
    
})