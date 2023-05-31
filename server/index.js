import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const io = new Server(3000, {
  cors: {
    origin: ["http://localhost:3000","https://admin.socket.io"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to RTS");
  // sent a msg to the client

  socket.on("msg", (data) => {
    console.log(data);
    // recieve a msg from the client
  });
});

instrument(io, {
  auth: false
});
