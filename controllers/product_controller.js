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
        res.status(200).send("All Products");
    } catch (error) {
        // Handle error
    }
}

export const getProductById = (req, res) => {
    try {
        res.status(200).send(`Displayed Product with id: ${req.params.id}`);
    } catch (error) {
        // Handle error
    }
}

export const updateProduct = (req, res) => {
    try {
        // Find product in database using the product id
        // Patch or Put Product
        res.status(200).send(`Product with id: ${req.params.id} updated`);
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