const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTrackerdb", { useNewUrlParser: true });

(require("./controllers/html.js"))(app);
(require("./controllers/api-routes.js"))(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });