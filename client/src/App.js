import React from "react";
import io from "socket.io-client";
import { useEffect } from "react";

//init the conenction
// const io = require('socket.io-client');

function App() {
  useEffect(() => {
    const socket = io("https://gss.wscada.net");

    socket.on("connect", () => {
      // recieve a msg from the server
      console.log("connect");
      socket.on("HPL", (data) => {
        console.log(data);
      });
      // send a msg to the server
      socket.emit("client_request", "HPL");
    });
  }, []);
  return <>Test</>;
}

export default App;
