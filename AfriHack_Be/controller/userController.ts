import { sendAccountMail } from "./../utils/email";
import { Request, Response } from "express";
import { HTTP } from "../error/mainError";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { Role } from "../config/role";
import env from "dotenv";
env.config();

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password } = req.body;

    const encrypt = await bcrypt.genSalt(10);
    const decipher = await bcrypt.hash(password, encrypt);
    const token = crypto.randomBytes(2).toString("hex");

    const user = await userModel.create({
      userName,
      email,
      token,
      password: decipher,
      role: Role.USER,
    });

    sendAccountMail(user).then(() => {
      console.log("Mail Sent ...");
    });

    return res.status(HTTP.CREATE).json({
      message: "User created Successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error creating User",
      data: error.message,
    });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        if (user.verified && user.token === "") {
          return res.status(HTTP.OK).json({
            message: "Sign In successfull",
            data: user,
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

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const getUser = await userModel.findById(userID);

    if (getUser) {
      const realUser = await userModel.findByIdAndUpdate(
        getUser._id,
        { verified: true, token: "" },
        { new: true }
      );
      return res.status(HTTP.UPDATE).json({
        message: "user Verified",
        data: realUser,
      });
    } else {
      return res.status(HTTP.BAD).json({
        message: "token Invalid / User does not exist",
      });
    }
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
