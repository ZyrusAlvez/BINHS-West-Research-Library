import mongoose from "mongoose";

const getFileController = (bucketName) => {
  return async (req, res) => {
    try {
      // Get the file ID from the request params
      const { id } = req.params;

      // Validate the ObjectId format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid file ID" });
      }

      // Access the GridFS bucket
      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName, // Use the passed bucketName
      });

      // Find the file in the database
      const file = await bucket.find({ _id: new mongoose.Types.ObjectId(id) }).toArray();

      if (!file || file.length === 0) {
        return res.status(404).json({ error: "File not found" });
      }

      // Stream the file to the response
      res.set("Content-Disposition", `attachment; filename="${file[0].filename}"`);
      const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(id));

      downloadStream.on("error", (err) => {
        console.error(err);
        res.status(500).json({ error: "Error while downloading the file" });
      });

      downloadStream.pipe(res); // Pipe the file stream to the response
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Server error" });
    }
  };
};

export default getFileController;
