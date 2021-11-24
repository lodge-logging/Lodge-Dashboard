const express = require("express");
const s3 = require("./s3Client");
const es = require("./esClient");
const { filterBasedOnDate } = require("./helpers/filterBasedOnDate");
const { generateConfig } = require("../filebeat/generateConfig");
const { modules } = require("../filebeat/filebeat-modules");
const { fileExist, createDir } = require("./helpers/fileOperations");
const { data } = require("../data.json");
const app = express();
const cors = require("cors");
const PORT = 5000;

let options = {
  bucketName: data.bucketName,
  prefix: "folder1",
};

app.use(cors());
app.use(express.json());

app.get("/filebeat", (req, res) => {
  let moduleType = "mongo";
  if (!fileExist(moduleType)) {
    createDir(moduleType);
    generateConfig(
      "../filebeat/filebeat.yml",
      `./filebeatConfigs/${moduleType}/filebeat.yml`,
      modules[moduleType],
      data.kibanaHost,
      data.kafkaHosts
    );
  }
});

app.get("/download", (req, res) => {
  let moduleType = "mongo";
  const file = `./filebeatConfigs/${moduleType}/filebeat.yml`;
  res.download(file); // Set disposition and send it.
});

app.post("/s3", async (req, res) => {
  let s = req.body.startDate;
  let e = req.body.endDate;
  console.log(s);
  console.log(e);

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
