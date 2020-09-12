import { Router } from 'express';
import {
  crateCategory,
  deleteCategory,
  getCategories,
} from '../controllers/categories.controller';

const router = Router();

router.route('/').get(getCategories).post(crateCategory);
router.route('/:id').delete(deleteCategory);

export default router;
