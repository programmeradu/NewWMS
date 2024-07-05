import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

  console.log(`Username: ${DB_USERNAME}`);
  console.log(`Password: ${DB_PASSWORD}`);
  console.log(`Database Name: ${DB_NAME}`);

  const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.3lja38l.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DataBase connected Sucessfully");
  } catch (error) {
    console.log("Error while connecting to mongoDB", error);
  }
};

export default Connection;
