const fs = require("fs");
const path = require("path");

function fileExist(name) {
  let path = `./filebeatConfigs/${name}/filebeat.yml`;

  return fs.existsSync(path);
}

function createDir(name) {
  fs.mkdirSync(path.join(__dirname, "..", "filebeatConfigs", name));
}

module.exports = { fileExist, createDir };
