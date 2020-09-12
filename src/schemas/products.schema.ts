import { Schema, model, Document } from 'mongoose';

export interface IProducts extends Document {
  product_name: string;
  category: string;
  image: string[];
  price: number;
  best_seller: boolean;
  qualification: number;
  description: string;
  color?: string;
  stock: number;
}

const productsSchema = new Schema({
  product_name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
  image: [{ type: String, required: true }],
  price: { type: Number, required: true },
  best_seller: { type: Boolean, required: true },
  qualification: { type: Number },
  description: { type: String, required: true },
  color: { type: String },
  stock: { type: Number, required: true },
});

export default model<IProducts>('Products', productsSchema);
