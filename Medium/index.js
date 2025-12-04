const express = require("express");
const fs = require("fs");
const checkAccess = require("./middleware");

const app = express();

app.get("/data/:user", checkAccess, (req, res) => {
  const data = fs.readFileSync("data.txt", "utf8"); 

  res.status(200).json({
    message: data
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
