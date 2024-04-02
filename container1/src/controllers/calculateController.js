const { calculateSum, storeFile } = require("../services/calculateService");

async function handleCalculateRequest(req, res) {
  try {
    const { file, product } = req.body;
    if (!file) {
      return res.status(400).json({ file: null, error: "Invalid JSON input." });
    }

    const result = await calculateSum(file, product);
    return res.json(result);
  } catch (error) {
    console.error(error);

    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }

    return res.status(500).json({ file: null, error: "Internal Server Error" });
  }
}

async function handleStoreFileRequest(request, response) {
  if (!request.body.file || !request.body.data) {
    return response.json({
      file: request.body.file || null,
      error: "Invalid JSON input.",
    });
  }

  try {
    const message = await storeFile(request.body.file, request.body.data);
    response.json({
      file: request.body.file,
      message: message,
    });
  } catch (error) {
    response.json({
      file: request.body.file,
      error: error,
    });
  }
}

module.exports = {
  handleCalculateRequest,
  handleStoreFileRequest,
};
