import { Request, Response } from "express";
import { HTTP } from "../error/mainError";
import userModel from "../model/userModel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Role } from "../utils/role";

export const createUser = async (req:Request,res:Response):Promise<Response> => {
    try {

        const { userName, email, password } = req.body;

        const encrypt = await bcrypt.genSalt(10);
        const decipher = await bcrypt.hash(password, encrypt)
        
        const token = jwt.sign({ decipher }, "code")

        const user = await userModel.create({
            userName,
            email,
            password: decipher,
            token,
            role:Role.USER
        })

        return res.status(HTTP.CREATE).json({
            message: "User created Successfully",
            data: user,
})
        
    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error creating User",
            data: error.message,
        })
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userID } = req.params;

        await userModel.findByIdAndDelete(userID)
      
        return res.status(HTTP.DELETE).json({
            message:"User deleted"
        })
  } catch (error: any) {
      return res.status(HTTP.BAD).json({
          message: "Error deleting User",
          data:error.message
      })
  }
};

export const findAllUser = async (req: Request, res: Response) => {
    try {

        const findAllUser = await userModel.find()

        return res.status(HTTP.OK).json({
          message: "All Users Successfully found",
          data: findAllUser,
        });
    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error finding all User",
            data:error.message
        })
    }
};
export const findOneUser = async (req: Request, res: Response) => {
    try {

        const { userID } = req.params;

        const findUser = await userModel.findById(userID)

        return res.status(HTTP.OK).json({
            message: "User Successfully found",
            data:findUser,
        })
    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error finding one User",
            data:error.message
        })
    }
};