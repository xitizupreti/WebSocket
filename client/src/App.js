import logo from "./logo.svg";
// import App from "./App.css"
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
        console.log("msg from server", data);
      });
      // send a msg to the server
      socket.emit("msg", "Thanks for connecting");
    });
    return()=>{
      socket.off('connect');
    }
  },
    []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
