import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config/config';

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectDb = async () => {
  try {
    mongoose.connect(config.DB.URI, dbOptions);

    const connection = mongoose.connection;

    await connection.once('open', () => {
      console.log('mongodb connection stablished');
    });
    await connection.on('error', (err) => {
      process.exit(0);
    });
    return connection.readyState;
  } catch (err) {
    throw err;
  }
};
