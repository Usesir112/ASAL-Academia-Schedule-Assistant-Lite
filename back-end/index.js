const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
