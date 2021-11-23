const express = require("express");
const s3 = require("./s3Client");
const es = require("./esClient");
const { filterBasedOnDate } = require("./helpers/filterBasedOnDate");
const app = express();
const PORT = 3000;

let options = {
  bucketName: "bandstand-s3",
  prefix: "folder1",
};

app.get("/s3", async (req, res) => {
  let startDate = { year: 2021, month: 10, day: 22 };
  let endDate = { year: 2021, month: 10, day: 24 };

  let objectsList = await s3.listObjectsKeys(
    options.bucketName
    // options.prefix
  );
  let filteredObjectKeys = filterBasedOnDate(objectsList, startDate, endDate);

  for (let index = 0; index < filteredObjectKeys.length; index++) {
    let object = await s3.getObject(
      options.bucketName,
      filteredObjectKeys[index]
    );
    es.pushToES(object);
  }
  // es.pushToES("./log.ndjson");
  res.send(filteredObjectKeys);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
