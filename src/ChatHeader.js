import React from "react";
import {
  EditLocationRounded,
  HelpRounded,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
  Notifications,
} from "@material-ui/icons";
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel Name
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input placeHolder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
}

export default ChatHeader;
