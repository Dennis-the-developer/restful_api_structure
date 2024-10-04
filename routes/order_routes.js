import { Router } from "express";

import { deleteOrder, makeOrder, updateOrder, viewOrder, viewOrders } from "../controllers/order_controller.js";

const orderRouter = Router();

orderRouter.post("/order", makeOrder);
orderRouter.get("/order/:id", viewOrder);
orderRouter.get("/order", viewOrders);
orderRouter.patch("/order/:id", updateOrder);
orderRouter.delete("/order/:id", deleteOrder);

export default orderRouter;