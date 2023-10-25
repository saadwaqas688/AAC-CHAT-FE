import { useEffect, useState } from 'react';
import './App.css';
import ChatApp from './ChatApp';
import { chatData } from './chatData';
import io from "socket.io-client";


function App() {



  useEffect(() => {

      const socket = io.connect("http://localhost:8080");

      socket.on("onStatusChange", (payload) => {
      console.log('called',payload)
        // setIsConnected(true);
      });
      socket.on("getallchats", (data) => {
      });
      socket.on("disconnect", () => {
        // setIsConnected(false);
      });

      socket.emit("send-message", {firstName:'jhon'});

      socket.on('create-chat', response => {
        console.log("response data from create-chat-waqas", response);
      });
      }, []);

  return (
    <div className="App">
    <div className="App">
      <ChatApp chatData={chatData} />
    </div>
    </div>
  );
}

export default App;
