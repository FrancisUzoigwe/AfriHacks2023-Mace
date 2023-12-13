import { Router } from "express";
import { payment } from "../controller/paymentController";


const router = Router();

router.route("/:userID/make-payment").post(payment)

export default router
