import { connectDb } from './database';
import { createServer } from './server';

const start = async () => {
  try {
    const status = await connectDb();
    if (status === 1) {
      await createServer();
    } else {
      throw new Error('Erron in database connection');
    }
  } catch (err) {
    console.log(err);
  }
};

start();
