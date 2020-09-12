import { Router } from 'express';
import {
  crateProduct,
  getProducts,
  getProduct,
  deleteProduct,
} from '../controllers/products.controller';

const router = Router();

router.post('/', crateProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);

export default router;
