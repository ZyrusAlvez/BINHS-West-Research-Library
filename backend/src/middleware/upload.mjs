import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

export default function upload() {
  const storage = new GridFsStorage({
    url: process.env.DATABASE,
    file: async (req, res) => {
      const fileInfo = {
        filename: res.originalname,
        bucketName: "uploads",
        metadata: {
          title: req.body.title || "Untitled",
        },
      };
      return fileInfo;
    }
  });

  return multer({ storage });
}
