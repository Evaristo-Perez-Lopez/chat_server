import { Server } from "socket.io";

// const io = new Server();

export class IoRoutes {
  startSocket(http) {
    this.io = new Server(http, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    this.io.on("connection", (socket) => {
      console.log("a user connected", socket.id);

      socket.on("chat-message", (msg) => {
        console.log("message: " + msg);
        this.io.emit("chat message", msg);
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}
