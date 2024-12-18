import express from "express";
import categoriesRoutes from "./routes/categories.routes";

const app = express();
const port = 3000;

app.use(categoriesRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server app listening on port ${port}!`));
