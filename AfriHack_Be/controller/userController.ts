import { Request, Response } from "express";
import { HTTP } from "../error/mainError";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Role } from "../config/role";
import { sendAccountMail } from "../utils/email";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password } = req.body;

    const encrypt = await bcrypt.genSalt(10);
    const decipher = await bcrypt.hash(password, encrypt);
    const tokened = crypto.randomBytes(3).toString("hex");
    const real = jwt.sign({tokened}, "code")

    
    const user = await userModel.create({
      userName,
      email,
      password: decipher,
      token: real,
      role:Role.USER,
    });
    
      const token = jwt.sign( {user} , "code");
    // sendAccountMail(user).then(() => {
    //   console.log("Mail Sent ...")
    // })

    return res.status(HTTP.CREATE).json({
      message: "User created Successfully",
      data: user,
      token
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating User",
      data: error.message,
    });
  }
};

export const createStoreOwner = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password } = req.body;

    const encrypt = await bcrypt.genSalt(10);
    const decipher = await bcrypt.hash(password, encrypt);
    const tokened = crypto.randomBytes(3).toString("hex");
    const real = jwt.sign({ tokened }, "code");

    const storeOwner = await userModel.create({
      userName,
      email,
      password: decipher,
      token: real,
      role: Role.STOREOWNER,
    });

    const token = jwt.sign({ storeOwner }, "code");
    // sendAccountMail(storeOwner).then(() => {
    //   console.log("Mail Sent ...")
    // })

    return res.status(HTTP.CREATE).json({
      message: "storeOwner created Successfully",
      data: storeOwner,
      token,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating storeOwner",
      data: error.message,
    });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user?.role === Role.USER) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        if (user.verified && user.token === "") {
          return res.status(HTTP.OK).json({
            message: "Sign In successfull",
          });
        } else {
          return res.status(HTTP.BAD).json({
            message: "User is not verified",
          });
        }
      } else {
        return res.status(HTTP.BAD).json({
          message: "Incorrect Password",
        });
      }
    } else {
      return res.status(HTTP.BAD).json({
        message: "User does not exist",
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating User",
      data: error.message,
    });
  }
};

export const signInOwner = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user?.role === Role.STOREOWNER) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        if (user.verified && user.token === "") {
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
        message: "StoreOwner does not exist",
      });
    }
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating StoreOwner",
      data: error.message,
    });
  }
};

export const verifyUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { token } = req.params;

    const getID: any = jwt.verify(token, "code", (err, payload) => {
      if (err) {
        return err;
      } else {
        return payload;
      }
    });


    const realUser = await userModel.findByIdAndUpdate(
      getID?.user?._id,
      { verified: true, token: "" },
      { new: true }
    );

    return res.status(HTTP.UPDATE).json({
      message: "user Verified",
      data: realUser,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error verifying user",
      data: error,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    await userModel.findByIdAndDelete(userID);

    return res.status(HTTP.DELETE).json({
      message: "User deleted",
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error deleting User",
      data: error.message,
    });
  }
};

export const findAllUser = async (req: Request, res: Response) => {
  try {
    const findAllUser = await userModel.find();

    return res.status(HTTP.OK).json({
      message: "All Users Successfully found",
      data: findAllUser,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error finding all User",
      data: error.message,
    });
  }
};

export const findOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const findUser = await userModel.findById(userID);

    return res.status(HTTP.OK).json({
      message: "User Successfully found",
      data: findUser,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error finding one User",
      data: error.message,
    });
  }
};
