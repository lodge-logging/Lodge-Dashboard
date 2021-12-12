const split = require("split2");
const { createReadStream } = require("fs");
const { Client } = require("@elastic/elasticsearch");
const data = require("./data.json");

const client = new Client({
  nodes: data.esIPs,
});

async function pushToES(obj, objectKey) {
  console.log("data", data);
  let date = objectKey.split(".")[4];
  const result = await client.helpers.bulk({
    datasource: obj.pipe(split(JSON.parse)),
    // datasource: [obj],
    //datasource: createReadStream(obj).pipe(split(JSON.parse)),
    onDocument(doc) {
      return { index: { _index: `restored-${date}` } };
    },
  });
  console.log(result);
}

module.exports = { pushToES };
