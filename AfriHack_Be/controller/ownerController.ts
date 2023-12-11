import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { HTTP } from "../error/mainError";
import { Role } from "../config/role";
import jwt from "jsonwebtoken"
import ownerModel from "../model/ownerModel";
import { iOwnerData } from "../utils/interface";
import crypto from "crypto"
import env from "dotenv";
env.config();



export const createStoreOwner = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password } = req.body;

    const encrypt = await bcrypt.genSalt(10);
    const decipher = await bcrypt.hash(password, encrypt);
    const token = crypto.randomBytes(2).toString("hex");

    const storeOwner = await ownerModel.create({
      userName,
      email,
      token,
      password: decipher,
      role: Role.STOREOWNER,
    });

    const jwtToken = jwt.sign({ storeOwner }, process.env.SECRET_KEY!);
    // sendAccountMail(storeOwner).then(() => {
    //   console.log("Mail Sent ...")
    // })

    return res.status(HTTP.CREATE).json({
      message: "storeOwner created Successfully",
      data: storeOwner,
      jwtToken,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating storeOwner",
      data: error.message,
    });
  }
};

export const signInOwner = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const owner = await ownerModel.findOne({ email });

    if (owner?.role === Role.STOREOWNER) {
      const checkPassword = await bcrypt.compare(password, owner.password);
      if (checkPassword) {
        if (owner.verified && owner.token === "") {
          return res.status(HTTP.OK).json({
            message: " StoreOwner Sign In successfull",
          });
        } else {
          return res.status(HTTP.BAD).json({
            message: "StoreOwner is not verified",
          });
        }
      } else {
        return res.status(HTTP.BAD).json({
          message: "Incorrect Password",
        });
      }
    } else {
      return res.status(HTTP.BAD).json({
        message: "u re not a store owner/StoreOwner does not exist",
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating StoreOwner",
      data: error.message,
    });
  }
};

export const verifyOwner = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    const getID: any = jwt.verify(token, "code", (err, payload) => {
      if (err) {
        return err;
      } else {
        return payload;
      }
    });

    if (getID) {
      const realUser = await ownerModel.findByIdAndUpdate(
        getID?.storeOwner?._id,
        { verified: true, token: "" },
        { new: true }
      );
      return res.status(HTTP.UPDATE).json({
        message: "owner Verified",
        data: realUser,
      });
    } else {
      return res.status(HTTP.BAD).json({
        message: "token Invalid / storeOwner does not exist",
      });
    }

  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error verifying owner",
      data: error,
    });
  }
};

export const deleteOwner = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ownerID } = req.params;

    await ownerModel.findByIdAndDelete(ownerID);

    return res.status(HTTP.DELETE).json({
      message: "Owner deleted",
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error deleting Owner",
      data: error.message,
    });
  }
};

export const findAllOwner = async (req: Request, res: Response):Promise<Response> => {
  try {
    // const findAllOwners = await ownerModel.find({}, { _id : 1}) as iOwnerData[];
    const findAllOwners = await ownerModel.find() ;

    return res.status(HTTP.OK).json({
      message: "All Owners Successfully found",
      data: findAllOwners,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error finding all User",
      data: error.message,
    });
  }
};

export const findOneOwner = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { ownerID } = req.params;

    const findOwner = await ownerModel.findById(ownerID);

    return res.status(HTTP.OK).json({
      message: "Owner Successfully found",
      data: findOwner,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error finding one Owner",
      data: error.message,
    });
  }
};
