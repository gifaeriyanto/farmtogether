import { register } from "./db.js";
import express from "express";

const app = express();
const port = 3001;

app.use(express.urlencoded());

app.get("/", (_req, res) => {
  res.send("API farmtogether-test");
});

app.get("/ping", (_req, res) => {
  res.send({
    ping: true,
  });
});

app.post("/register", (req, res) => {
  register(req.body);
  res.send(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
