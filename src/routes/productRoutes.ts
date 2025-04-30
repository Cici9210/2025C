import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();
const productController = new ProductController();

export const setProductRoutes = (app) => {
    app.use('/api/products', router);
    router.get('/', productController.getAllProducts.bind(productController));
    router.get('/:id', productController.getProductById.bind(productController));
};