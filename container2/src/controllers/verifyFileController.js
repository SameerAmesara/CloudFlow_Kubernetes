const { processFileRequest } = require("../services/verifyFileService");

async function verifyFile(req, res) {
  try {
    const { file, product } = req.body;

    const result = await processFileRequest(file, product);

    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ file: null, error: "Internal Server Error" });
  }
}

module.exports = {
  verifyFile,
};
