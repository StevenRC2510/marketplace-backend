import { Request, Response } from 'express';

import {
  createCategoryService,
  getCategoriesService,
  deleteCategoryService,
} from '../services/categories.service';
import Categories from '../schemas/categories.schema';

export const crateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { category_name, type, image } = req.body;
  const newCategory = {
    category_name,
    type,
    image,
  };
  const category = new Categories(newCategory);
  try {
    await createCategoryService(category);
    return res.json({
      messsage: 'Success',
      category,
    });
  } catch (err) {
    return res.status(400).json({
      err: 'Error at create category',
    });
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const categories = await getCategoriesService();
    return res.json(categories);
  } catch (err) {
    return res.status(400).json({
      err: 'Error at getting categories',
    });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    await deleteCategoryService(id);
    return res.json({
      message: 'Category Deleted',
    });
  } catch (err) {
    return res.status(400).json({
      err: 'Error at elimate category',
    });
  }
};
