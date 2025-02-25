import express from "express";
import http from "http";
import { IndexRoutes } from "./routes/routes.js";
import { IoRoutes } from "./io_routes/io_routes.js";

// CONFIGURATION
const application = express();
const port = 3000;

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

// ROUTES

const routes = new IndexRoutes();
routes.initRoutes(application);
const io = new IoRoutes();

// SERVER
const httpServer = http.createServer(application);

httpServer.listen(3001, () => {
  console.log("Socket server is running on port 3001");
});
io.startSocket(httpServer);
application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
