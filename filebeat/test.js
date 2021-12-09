const path = require("fs");
const { generateConfig } = require("./generateConfig");
const { modules } = require("./filebeat-modules");
const data = require("../data.json");

// (filePath, newFilePath, filebeatModule, kibanaHost, kafkaHosts)
// const filePath = path.join(__dirname, '..', '..', 'configFiles', 'filebeat', 'filebeat.yml');
generateConfig(
  "filebeat.yml",
  "filebeat-5.yml",
  modules.mongo,
  data.kibanaHost,
  data.kafkaHosts
);
