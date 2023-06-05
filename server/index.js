import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const io = new Server(3000, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://admin.socket.io",
      "http://gss.wscada.net",
      "https://dms2.dhm.gov.np/gss",
    ],
    credentials: true,
  },
});
// const corsOptions = {
//   origin: 'https://dms2.dhm.gov.np/gss'
// };
// app.use(cors(corsOptions));

io.on("connection", (socket) => {
  console.log("server");
  socket.emit("river_test", "welcome to RTS");
  // sent a msg to the client

  socket.on("msg", (data) => {
    console.log(data);
    // recieve a msg from the client
  });
});

instrument(io, {
  auth: false,
});
