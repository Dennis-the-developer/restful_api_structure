import { Router } from "express";
import { addProducts, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/product_controller.js";

const productRouter = Router();

productRouter.post("/product", addProducts);
productRouter.get("/product/:id", getProductById);
productRouter.get("/product", getProducts);
productRouter.patch("/product/:id", updateProduct);
productRouter.delete("/product/:id", deleteProduct);

export default productRouter;