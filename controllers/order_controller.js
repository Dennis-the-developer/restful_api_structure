// import model(s)

export const makeOrder = (req, res, next) => {
    try {
        // Validate and retrieve order details from request
        res.status(201).send("Order maded successfully"); 
    } catch (error) {
        next(error);
    }
}

export const viewOrder = (req, res, next) => {
    try {
        res.status(200).send(`Display order with id: ${req.params.id}`);
    } catch (error) {
        next(error);
    }
}

export const viewOrders = (req, res, next) => {
    try {
        res.status(200).send("Display orders");
    } catch (error) {
        next(error);
    }
}

export const updateOrder = (req, res, next) => {
    try {
        // Find order in db using id in req
        // Update order record
        res.status(200).send(`Order with id: ${req.params.id} updated successfully`);
    } catch (error) {
        next(error);
    }
}

export const deleteOrder = (req, res, next) => {
    try {
         // Find order in db using id in req
        //  Delete order
        res.status(200).send("Order deleted successfully");
    } catch (error) {
        next(error);
    }
}