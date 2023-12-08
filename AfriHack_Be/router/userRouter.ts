import { Router } from "express";
import { createUser, deleteUser } from "../controller/userController";


const router = Router();

router.route("/create-user").post(createUser)
router.route("/:userID/delete-user").delete(deleteUser)

export default router