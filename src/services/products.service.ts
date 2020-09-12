import Products from '../schemas/products.schema';

export const getProductsService = async (search: Record<string, any>) => {
  try {
    const products = await Products.find(search).populate('category');
    return products;
  } catch {
    throw new Error('the list product doesn`t exist');
  }
};

export const getProductService = async (id: string) => {
  try {
    const product = await Products.findById(id);
    return product;
  } catch {
    throw new Error('the product doesn`t exist');
  }
};

export const deleteProductService = async (id: string) => {
  try {
    return await Products.findByIdAndRemove(id);
  } catch {
    throw new Error('the product doesn`t exist');
  }
};
