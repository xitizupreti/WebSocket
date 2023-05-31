import React from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";

//init the conenction
const socket = io("http://localhost:3000/");


function App() {
  useEffect(() => {
    socket.on("connect", () => {
      // recieve a msg from the server
      socket.on("welcome", (data) => {
        console.log(data);
      });
      // send a msg to the server
      socket.emit("msg", "Thanks for connecting");
    });
    // return()=>{
    //   socket.off('connect');
    // }
  },
    []);
  return (
    <>Test</>
  );
}

export default App;
