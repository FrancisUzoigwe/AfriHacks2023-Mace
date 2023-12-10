import { Router } from "express";
import { createStoreOwner, createUser, deleteUser, findAllUser, findOneUser, signInUser, verifyUser } from "../controller/userController";


const router = Router();

router.route("/create-user").post(createUser)
router.route("/create-owner").post(createStoreOwner)
router.route("/sign-in-user").post(signInUser)
router.route("/:token/verify-user").patch(verifyUser)
router.route("/:userID/find-one-user").get(findOneUser)
router.route("/find-all-users").get(findAllUser)
router.route("/:userID/delete-user").delete(deleteUser)

export default router