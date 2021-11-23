const split = require("split2");
const { createReadStream } = require("fs");
const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  node: "http://localhost:9200",
});

async function pushToES(obj) {
  const result = await client.helpers.bulk({
    datasource: obj.pipe(split(JSON.parse)),
    // datasource: [obj],
    //datasource: createReadStream(obj).pipe(split(JSON.parse)),
    onDocument(doc) {
      return { index: { _index: "test" } };
    },
  });
  console.log(result);
}

module.exports = { pushToES };
