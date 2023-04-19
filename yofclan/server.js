const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.get("/index", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
