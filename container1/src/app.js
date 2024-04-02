const express = require("express");
const bodyParser = require("body-parser");

const {
  handleCalculateRequest,
  handleStoreFileRequest,
} = require("./controllers/calculateController");

const app = express();
const PORT = 6000;

app.use(bodyParser.json());

app.post("/calculate", handleCalculateRequest);
app.post("/store-file", handleStoreFileRequest);

app.listen(PORT, () => {
  console.log(`Container 1 is listening on port ${PORT}`);
});
