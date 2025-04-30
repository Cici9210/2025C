export class ProductService {
    private products: Array<{ id: number; name: string; price: number; description: string }> = [];

    constructor() {
        // Initialize with some dummy data
        this.products = [
            { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1' },
            { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2' },
        ];
    }

    fetchProducts() {
        return this.products;
    }

    fetchProductById(id: number) {
        return this.products.find(product => product.id === id);
    }
}