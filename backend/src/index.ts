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

app.post("/api/register", upload.none(), (req, res) => {
  register(req.body);
  res.send(JSON.stringify(req.body));
});

app.post("/api/check-email", upload.none(), async (req, res) => {
  if (!req.body.email) {
    return;
  }

  const isExist = await checkUserIfExist(req.body.email);
  if (isExist) {
    res.status(403);
    res.send(
      JSON.stringify({
        status: "Email is exist",
      })
    );
  } else {
    res.send(
      JSON.stringify({
        status: "Email is not exist",
      })
    );
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
