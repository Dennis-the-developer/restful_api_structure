import express from "express";
import userRouter from "./routes/user_routes";
import productRouter from "./routes/product_routes";
import orderRouter from "./routes/order_routes";

const port = 8080;

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

const app = express();
app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})