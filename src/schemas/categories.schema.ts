import { Schema, model, Document } from 'mongoose';

export interface ICategories extends Document {
  category_name: string;
  image: string;
  type: string;
}

const categoriesSchema = new Schema({
  category_name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
});

export default model<ICategories>('Categories', categoriesSchema);
