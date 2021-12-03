const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.mongooseurl;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodg success");
});

const exerciseRoute = require("./routes/stuff");
const userRoute = require("./routes/users");
app.use("/exercise", exerciseRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});