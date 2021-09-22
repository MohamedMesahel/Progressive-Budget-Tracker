const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budgetDB",
{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true });


// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// mongodb+srv://Root:Zizo1234@cluster0.tjgsv.mongodb.net/budgetDB?retryWrites=true&w=majority