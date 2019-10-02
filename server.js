const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const reviews = require("./routes/Routes");

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/reviews", reviews);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Connected on Port ${port}`));
