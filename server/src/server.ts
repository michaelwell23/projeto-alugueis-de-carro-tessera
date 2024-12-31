import express from "express";

import router from "./routes/index.router";

const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server app listening on port ${port}!`));
