import express from "express";
export class IndexRoutes {
  initRoutes(app = express.application) {
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.post("/user", (req, res) => {
      const { name, email } = req.body;
      // res.send(`User ${name} with email ${email} created`);
      res.json({ name, email, status: "created" });
    });
  }
}
