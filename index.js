import express from "express";
import userRouter from "./routes/user_routes.js";
import productRouter from "./routes/product_routes.js";
import orderRouter from "./routes/order_routes.js";
import expressOasGenerator from '@mickeymond/express-oas-generator';

const app = express();

const port = 8080;

// ExpressOasGenerator ResponseHandler
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ["Auth", "Products", "Order"]
})

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

//ExpressOasGenerator requests
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs"));

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})