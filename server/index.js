const express = require("express");
const externalSource = require("./emails.js");
const cors = require("cors");
const app = express();
const port = 5000;

const emails = externalSource.emails;

app.use(cors());

//default path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//no search term provided, return all countries
app.get("/getEmails", (req, res) => {
  res.send(emails);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
