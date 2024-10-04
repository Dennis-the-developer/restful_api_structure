import { Router } from "express";

import { deleteOrder, makeOrder, updateOrder, viewOrder, viewOrders } from "../controllers/order_controller.js";

const orderRouter = Router();

orderRouter.post("users/:userId/products/:productId/orders", makeOrder);
orderRouter.get("users/:userId/orders/:orderId", viewOrder);
orderRouter.get("users/:userId/orders", viewOrders);
orderRouter.patch("users/:userId/orders/:orderId", updateOrder);
orderRouter.delete("users/:userId/orders/:orderId", deleteOrder);

export default orderRouter;