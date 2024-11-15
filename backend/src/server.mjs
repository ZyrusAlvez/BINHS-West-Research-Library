import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import researchRouter from "./routes/researchRoute.mjs";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/research", researchRouter)

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("Connected!");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });







// Connect to MongoDB GridFS bucket using mongoose
// let bucket;
// (() => {
//   mongoose.connection.on("connected", () => {
//     bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
//       bucketName: "uploads",
//     });
//   });
// })();
