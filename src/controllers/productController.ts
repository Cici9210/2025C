class ProductController {
    async getAllProducts(req, res) {
        // Logic to get all products
        res.send("All products");
    }

    async getProductById(req, res) {
        const { id } = req.params;
        // Logic to get a product by id
        res.send(`Product with id: ${id}`);
    }
}

export default ProductController;