// import models

export const addProducts = (req, res) => {
    try {
        // Validate and retrieve product details from request
        res.status(201).send("Product added"); 
    } catch (error) {
        // Handle error
    }
}

export const getProducts = (req, res) => {
    try {
        res.status(200).send("Display products");
    } catch (error) {
        // Handle error
    }
}

export const getDiscountedProducts = (req, res) => {
    try {
        const {limit, offset, sort, order, oldPrice, discountedPrice} = req.query;
        // For Pagination
        limit = parseInt(limit) || 50;
        offset = parseInt(offset) || 10;

        // For Filtering
        oldPrice = oldPrice || 0;
        discountedPrice = discountedPrice || 0;

        // For Sorting
        sort = sort || "name";
        order = order || "asc";

        // Query the database using the provided queries to extract the requested data from the db.

        res.status(200).send("Display discounted products");
    } catch (error) {
        // Handle error
    }
}

export const getProductById = (req, res) => {
    try {
        res.status(200).send(`Displayed Product with id: ${req.params.productId}`);
    } catch (error) {
        // Handle error
    }
}

export const updateProduct = (req, res) => {
    try {
        // Find product in database using the product id
        // Patch or Put Product
        res.status(200).send(`Product with id: ${req.params.productId} updated`);
    } catch (error) {
        // Handle error
    }
}

export const deleteProduct = (req, res) => {
    try {
        // Find product in database using the product id
        // Remove product from db
        res.status(200).send("Product deleted");
    } catch (error) {
        // Handle error
    }
}