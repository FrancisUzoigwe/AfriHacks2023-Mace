import { Router } from 'express';
import { createProduct, deleteProduct } from '../controller/productController';
import multer from "multer";
let uploadData = multer();


const router = Router()

router.route("/:userID/create-product").post(uploadData.single("image"),createProduct)
router.route("/:productID/delete-product").delete(deleteProduct)

export default router