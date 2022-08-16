const express = require("express");
const path = require("path");
const { default: App } = require("./App");

const PORT = process.env.PORT || 8080;
app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);
