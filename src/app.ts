import express from 'express';
import { setProductRoutes } from './routes/productRoutes';
import { setUserRoutes } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setProductRoutes(app);
setUserRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});