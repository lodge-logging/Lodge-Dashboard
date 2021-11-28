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
const { formatDate } = require("./helpers/formatDate");

let options = {
  bucketName: data.bucketName,
  prefix: "folder1",
};

app.use(cors());
app.use(express.json());

// app.get("/filebeat", (req, res) => {
//   let moduleType = "mongo";
//   if (!fileExist(moduleType)) {
//     createDir(moduleType);
//     generateConfig(
//       "../filebeat/filebeat.yml",
//       `./filebeatConfigs/${moduleType}/filebeat.yml`,
//       modules[moduleType],
//       data.kibanaHost,
//       data.kafkaHosts
//     );
//   }
// });

app.get("/download", (req, res) => {
  let { module } = req.query;
  module = module.toLowerCase();
  console.log(module);
  if (!fileExist(module)) {
    createDir(module);
    generateConfig(
      "../filebeat/filebeat.yml",
      `./filebeatConfigs/${module}/filebeat.yml`,
      modules[module],
      data.kibanaHost,
      data.kafkaHosts
    );
  }
  // let moduleType = "mongo";
  const file = `./filebeatConfigs/${module}/filebeat.yml`;
  res.download(file); // Set disposition and send it.
});

app.post("/s3", async (req, res) => {
  let { startDate, endDate } = req.body;

  let [formattedStartDate, formattedEndDate] = formatDate(startDate, endDate);
  try {
    let objectsList = await s3.listObjectsKeys(
      options.bucketName
      // options.prefix
    );
    let filteredObjectKeys = filterBasedOnDate(
      objectsList,
      formattedStartDate,
      formattedEndDate
    );

    for (let index = 0; index < filteredObjectKeys.length; index++) {
      let object = await s3.getObject(
        options.bucketName,
        filteredObjectKeys[index]
      );
      es.pushToES(object);
    }
    // es.pushToES("./log.ndjson");
    res.json({
      message: "Data retrieved successfully!, Check Kibana UI",
      retrievedFile: filteredObjectKeys,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(400);
    res.json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
