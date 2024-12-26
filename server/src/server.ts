import express from "express";

import categoriesRoutes from "./routes/categories.routes";
import SpecificationsRoutes from "routes/specifications.routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", SpecificationsRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server app listening on port ${port}!`));
