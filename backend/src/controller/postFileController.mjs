const postFileController = async (req, res) => {
  try {
    res.status(201).json({ file: req.file });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ error: error.message });
  }
};

export default postFileController;
