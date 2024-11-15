import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

export default function upload(bucketName) {
  const storage = new GridFsStorage({
    url: process.env.DATABASE,
    file: async (req, file) => { 
      console.log(req.body.title)
      const title = req.body?.title || "Untitled";  
      const fileInfo = {
        filename: file.originalname,
        bucketName: bucketName,
        metadata: {
          title: req.body.title || file.originalname.slice(0, -4)
        },
      };
      return fileInfo;
    }
  });

  return multer({ storage });
}
