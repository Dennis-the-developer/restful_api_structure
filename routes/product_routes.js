import { Router } from "express";
import { addProducts, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/product_controller.js";

const productRouter = Router();

productRouter.post("users/:userId/products", addProducts);
productRouter.get("/products/:productId", getProductById);
productRouter.get("/products", getProducts);
productRouter.patch("users/:userId/products/:productId", updateProduct);
productRouter.delete("users/:userId/products/:productId", deleteProduct);

export default productRouter;