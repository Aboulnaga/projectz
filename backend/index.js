import dotenv from "dotenv/config";
import express from "express";
import colors from "colors";
const PORT = process.env.PORT;
console.log(PORT);

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1> Hello from server </h1>");
});

app.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`.underline.red);
});
