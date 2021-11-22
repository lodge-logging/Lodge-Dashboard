const split = require("split2");
const AWS = require("aws-sdk");
const {
  GetObjectCommand,
  S3Client,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");
const { Client } = require("@elastic/elasticsearch");

const s3client = new S3Client({});
const client = new Client({
  node: "http://localhost:9200",
});

async function doThis(obj) {
  // console.log(obj);
  const stats = await client.helpers.bulk({
    datasource: obj.pipe(split()),
    onDocument(doc) {
      return { index: { _index: "demo" } };
    },
  });
}

const port = 3000;
const bucketName = "bandstand-s3";
const prefix = "folder1";

const app = express();

let options = {
  Bucket: bucketName,
};

function dateCheck(current, from, to) {
  let fromDate = new Date(Date.UTC(from.year, from.month, from.day));
  let toDate = new Date(Date.UTC(to.year, to.month, to.day, 23, 59, 59, 999));

  return current >= fromDate && current <= toDate;
}

function filterBasedOnDate(data, from, to) {
  let objectkeys = data
    .filter((object) => {
      return dateCheck(object.LastModified, from, to);
    })
    .map((object) => object.Key);

  return objectkeys.splice(1);
}

// async function getObject(bucketName, objectKey) {
//   return new Promise(async (resolve, reject) => {
//     let objectData = new GetObjectCommand({
//       Bucket: bucketName,
//       Key: objectKey,
//     });
//     try {
//       let logs = [];
//       const response = await s3client.send(objectData);
//       // response.Body.on("data", (chunk) => {
//       //   logs.push(chunk);
//       // });
//       // response.Body.once("end", () => resolve(logs.join("")));
//       resolve(response);
//     } catch (err) {
//       return reject(err);
//     }
//   });
// }

app.get("/s3", async (req, res) => {
  try {
    let startDate = { year: 2021, month: 10, day: 22 };
    let endDate = { year: 2021, month: 10, day: 23 };
    let logs = [];
    // let s3Objects = await s3.listObjectsV2(options).promise();
    let s3Objects = new ListObjectsV2Command({ ...options, Prefix: prefix });
    let r = await s3client.send(s3Objects);
    let filteredObjects = filterBasedOnDate(r.Contents, startDate, endDate);

    //for (let i = 0; i < filteredObjects.length; i++) {
    // const response = await getObject(options.Bucket, filteredObjects[i]);
    let objectData = new GetObjectCommand({
      Bucket: options.Bucket,
      Key: "folder1/log.txt",
    });

    const response = await s3client.send(objectData);
    console.log(response.ContentType);
    // // // response.Body.on("data", (chunk) => {
    // // //   logs.push(chunk);
    // // // });
    // // // response.Body.once("end", () => doThis(logs.join("")));
    // doThis(response.Body);
    //}
    res.send(filteredObjects);
  } catch (err) {
    console.error(err);
  }
});
