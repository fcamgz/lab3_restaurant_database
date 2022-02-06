const express = require("express");
const mongoose = require("mongoose");
const ResturantRouter = require("./routes/restaurants");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.log(`Error has occured ${err}`));

app.use("/restaurants", ResturantRouter);

app.listen(3000, () => console.log("Server is running on Port 3000"));
