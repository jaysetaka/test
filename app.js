const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Test App To Deploys</h1>`);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
