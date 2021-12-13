const split = require("split2");
const { Client } = require("@elastic/elasticsearch");
const data = require("./data.json");
// const { createReadStream } = require("fs");

const client = new Client({
  nodes: data.esIPs,
});

function pushToES(obj, objectKey) {
  let date = objectKey.split(".")[3];
  date = date.split("T")[0].replaceAll("-", ".");
  client.helpers.bulk({
    datasource: obj.pipe(split(JSON.parse)),
    // datasource: [obj],
    //datasource: createReadStream(obj).pipe(split(JSON.parse)),
    onDocument(doc) {
      return { index: { _index: `restored-${date}` } };
    },
  });
}

module.exports = { pushToES };
