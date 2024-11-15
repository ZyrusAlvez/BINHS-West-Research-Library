import express from "express";
import upload from "../middleware/upload.mjs";
import getFileController from "../controller/getFileController.mjs";
import postFileController from "../controller/postFileController.mjs";

const researchRouter = express.Router();
const bucketName11SPI = "Grade11/SPI";
const bucketName11PR = "Grade11/PR";
const bucketName12PR = "Grade12/PR";
const bucketName12capstone = "Grade12/capstone";

researchRouter.post("/Grade11/SPI/postFile", upload(bucketName11SPI).single("file"), postFileController);
researchRouter.get("/Grade11/SPI/getFile/:id", getFileController(bucketName11SPI));
researchRouter.post("/Grade11/PR/postFile", upload(bucketName11PR).single("file"), postFileController);
researchRouter.get("/Grade11/PR/getFile/:id", getFileController(bucketName11PR));
researchRouter.post("/Grade12/PR/postFile", upload(bucketName12PR).single("file"), postFileController);
researchRouter.get("/Grade12/PR/getFile/:id", getFileController(bucketName12PR));
researchRouter.post("/Grade12/capstone/postFile", upload(bucketName12capstone).single("file"), postFileController);
researchRouter.get("/Grade12/capstone/getFile/:id", getFileController(bucketName12capstone));

export default researchRouter
