import express from "express";
import endpoints from "express-list-endpoints";
import mongoose from "mongoose";
import { authorRoute } from "./services/authors/index.js";
import { blogRoute } from "./services/blogs/index.js";
import { badRequestHandler, genericErrorHandler, notfoundHandler, unauthorizedHandler } from "./errorHandlers.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/authors", authorRoute);
app.use("/blogs", blogRoute);

app.use(badRequestHandler); // 400
app.use(unauthorizedHandler); // 401
app.use(notfoundHandler); // 404
app.use(genericErrorHandler); // 500 (this should ALWAYS be the last one)

const initServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URI);
    console.log("🌚 The server has successfully connected to mongodb.");
    app.listen(PORT, () => {
      console.log("🌚 Server has started on port " + PORT + "!" + " \n🌝 The server has these endpoints: \n");
      console.table(endpoints(app));
    });
  } catch (error) {
    console.log("❌ CONNECTION FAILED! Error: ", error);
  }
};

initServer();
