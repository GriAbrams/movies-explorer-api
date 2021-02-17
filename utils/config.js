require('dotenv').config();

const {
  MONGO_URL = 'mongodb://localhost:27017/bitfilmsdb',
  JWT_SECRET = 'JWT_SECRET',
  PORT = 3000,
} = process.env;

const mongoConfig = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

module.exports = {
  MONGO_URL, JWT_SECRET, PORT, mongoConfig,
};
