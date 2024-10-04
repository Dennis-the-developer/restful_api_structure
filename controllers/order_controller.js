// import model(s)

export const makeOrder = (req, res) => {
    try {
        // Validate and retrieve order details from request
        res.status(201).send("Order maded successfully"); 
    } catch (error) {
        // Handle error
    }
}

export const viewOrder = (req, res) => {
    try {
        res.status(200).send(`Display order with id: ${req.params.id}`);
    } catch (error) {
        // Handle error
    }
}

export const viewOrders = (req, res) => {
    try {
        res.status(200).send("Display orders");
    } catch (error) {
        // Handle error
    }
}

export const updateOrder = (req, res) => {
    try {
        // Find order in db using id in req
        // Update order record
        res.status(200).send(`Order with id: ${req.params.id} updated successfully`);
    } catch (error) {
        // Handle error
    }
}

export const deleteOrder = (req, res) => {
    try {
         // Find order in db using id in req
        //  Delete order
        res.status(200).send("Order deleted successfully");
    } catch (error) {
        // Handle error
    }
}