import { Server } from "socket.io";

const io = new Server(3000,{
    cors:{
        origin:"*",
    },
});

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to RTS");

  socket.on("msg", (data) => {
    console.log("msg from client", data);
  });
});
