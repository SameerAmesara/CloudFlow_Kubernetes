const express = require("express");
const { verifyFile } = require("./controllers/verifyFileController");

const app = express();
const PORT = 7000;

app.use(express.json());

app.post("/verify-file", verifyFile);

app.listen(PORT, () => {
  console.log(`Container 2 is listening on port ${PORT}`);
});
