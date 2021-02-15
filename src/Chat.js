import React from "react";
import Message from "./Message";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input placeholder={"Message #TESTCHANNEL"} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
