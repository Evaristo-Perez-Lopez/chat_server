import express from "express";
import { IndexRoutes } from "./routes/routes.js";
const application = express();

const port = 3000;

const routes = new IndexRoutes();

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

routes.initRoutes(application);

application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
