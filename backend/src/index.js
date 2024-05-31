import express from "express";
import colors from "colors";
const app = express();
const PORT = process.env.PORT;

console.log(PORT);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello From Server</h1>");
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`.underline.red);
});
