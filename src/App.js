import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
