const fs = require("fs");
const path = require("path");
const csvParser = require("csv-parser");

const PV_DIR = "/sameer_PV_dir/";

const processFileRequest = async (file, product) => {
  const filePath = path.join(PV_DIR, file);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return { file, error: "File not found." };
  }

  const results = [];
  let hasValidStructure = true;

  const csvOptions = {
    mapHeaders: ({ header }) => header.trim(),
    mapValues: ({ value }) => value.trim(),
  };

  try {
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser(csvOptions))
        .on("headers", (headers) => {
          if (!headers.includes("product") || !headers.includes("amount")) {
            hasValidStructure = false;
          }
        })
        .on("data", (data) => {
          console.log(data);
          if (!data.product || !data.amount || isNaN(Number(data.amount))) {
            hasValidStructure = false;
          }
          results.push(data);
        })
        .on("end", () => {
          if (!hasValidStructure) {
            reject(new Error("Input file not in CSV format."));
          } else {
            resolve();
          }
        })
        .on("error", (error) => reject(error));
    });

    const productSum = results.reduce((sum, row) => {
      if (row.product === product) {
        return sum + parseFloat(row.amount);
      }
      return sum;
    }, 0);

    return { file, sum: Math.round(productSum) };
  } catch (error) {
    return { file, error: error.message };
  }
};

module.exports = { processFileRequest };
