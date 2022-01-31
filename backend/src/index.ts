import { checkUserIfExist, register } from "./db.js";
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const upload = multer();

app.get("/", (_req, res) => {
  res.send("API farmtogether-test");
});

app.get("/ping", (_req, res) => {
  res.send({
    ping: true,
  });
});

app.post("/register", upload.none(), (req, res) => {
  register(req.body);
  res.send(JSON.stringify(req.body));
});

app.post("/check-user", upload.none(), (req, res) => {
  let status = "";
  if (req.body.email) {
    status = checkUserIfExist(req.body.email)
      ? "User is exist"
      : "User is not exist";
  }
  res.send(status);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
