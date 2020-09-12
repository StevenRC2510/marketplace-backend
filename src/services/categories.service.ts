import Categories from '../schemas/categories.schema';
import { ICategories } from '../schemas/categories.schema';

export const createCategoryService = async (category: ICategories) => {
  try {
    return await category.save();
  } catch {
    throw new Error('the category could not be created');
  }
};

export const getCategoriesService = async () => {
  try {
    return await Categories.find();
  } catch {
    throw new Error('categories doesn`t exist');
  }
};

export const deleteCategoryService = async (id: string) => {
  try {
    return await Categories.findByIdAndRemove(id);
  } catch {
    throw new Error('category could be eliminated');
  }
};
