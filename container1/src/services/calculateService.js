const fs = require("fs");
const axios = require("axios");
const path = require("path");

// Use a specific directory for the persistent volume
const PV_DIR = "/sameer_PV_dir/";

async function storeFile(filename, data) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(PV_DIR, filename);

    fs.writeFile(filePath, data, (error) => {
      if (error) {
        reject("Error while storing the file to the storage.");
      } else {
        resolve("Success.");
      }
    });
  });
}

async function calculateSum(file, product) {
  // Send a request to Container 2 to calculate the sum
  const response = await axios.post(
    "http://container2-service:7000/verify-file",
    {
      file,
      product,
    }
  );

  console.log(typeof response.data, response, response.data);

  return response.data;
}

module.exports = {
  calculateSum,
  storeFile,
};
