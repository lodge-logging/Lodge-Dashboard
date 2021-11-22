const express = require("express");
const app = express();
const PORT = 3000;

let options = {
  bucketName: "bandstand-s3",
  prefix = "folder1"
};

app.get("/s3", (req, res) => {
  let startDate = { year: 2021, month: 10, day: 22 };
  let endDate = { year: 2021, month: 10, day: 23 };
  res.send("Welcome to s3");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
