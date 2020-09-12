import { Request, Response } from 'express';

import {
  getProductsService,
  getProductService,
  deleteProductService,
} from '../services/products.service';
import Products from '../schemas/products.schema';

export const crateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {
    product_name,
    category,
    image,
    price,
    best_seller,
    qualification,
    description,
    color,
    stock,
  } = req.body;
  const newProduct = {
    product_name,
    category,
    image,
    price,
    best_seller,
    qualification,
    description,
    color,
    stock,
  };
  const product = new Products(newProduct);
  await product.save();
  return res.json({
    messsage: 'Success',
    product,
  });
};

export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const search: Record<string, any> = {};
  const { query } = req;
  if (query.category) {
    search.category = query.category;
  }
  try {
    const products = await getProductsService(search);
    return res.json(products);
  } catch (err) {
    return res.status(400).json({
      err: 'error at getting product',
    });
  }
};

export const getProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const product = await getProductService(id);
    return res.json(product);
  } catch (err) {
    return res.status(400).json({
      err: 'id product doesn`t exist',
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    await deleteProductService(id);
    return res.json({
      message: 'Product Deleted',
    });
  } catch (err) {
    return res.status(400).json({
      err: 'id product doesn`t exist',
    });
  }
};
