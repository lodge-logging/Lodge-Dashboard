const {
  GetObjectCommand,
  S3Client,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");

const s3client = new S3Client({});

async function listObjectsKeys(bucketName, prefix) {
  let ListCommand = new ListObjectsV2Command({
    Bucket: bucketName,
    //Prefix: prefix,
  });
  try {
    let response = await s3client.send(ListCommand);
    return response.Contents;
  } catch (err) {
    console.error(err);
  }
}

async function getObject(bucketName, key) {
  let ObjectCommand = new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
  });
  try {
    let response = await s3client.send(ObjectCommand);
    return response.Body;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { listObjectsKeys, getObject };
