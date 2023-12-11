import { Request, Response } from "express";
import { HTTP } from "../error/mainError";
import productModel from "../model/productModel";
import { streamUpload } from "../utils/streamifier";
import ownerModel from "../model/ownerModel";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
    try {
        const { userID } = req.body;
    const { name, description, price } = req.body;

        const findUser = await ownerModel.findById(userID)
        
    let image = await streamUpload(req)

      if (findUser?.role === "storeOwner") {
        const product = await productModel.create({
          name,
          description,
          price,
          image: image.secure_url!,
        });
          return res.status(HTTP.CREATE).json({
              messsage: "Product Created",
              data:product
          });
      } else {
          return res.status(HTTP.BAD).json({
            messsage:"You don't have the right to create Product"
        })
      }
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating product",
    });
  }
};

// export const deleteProduct = async
