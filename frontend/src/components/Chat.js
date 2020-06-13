import React, { useRef, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const URL = "ws://localhost:3030";
const ws = new WebSocket(URL);

const Chat = observer(({ Store }) => {
  const divRef = useRef(null);
  const [name, setName] = useState("Bob");
  //const [ws, setWs] = useState(new WebSocket(URL));

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
    };
    Store.changeRoom("room1");
    if (!Store.messages[Store.currentRoom]) {
      Store.messages[Store.currentRoom] = [];
    }
  });

  useEffect(() => {
    ws.onmessage = (e) => {
      // on receiving a message, add it to the list of messages
      const receivingMessage = JSON.parse(e.data);
      Store.addMessage(receivingMessage);
    };
    divRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  const submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: name, message: messageString };
    ws.send(JSON.stringify(message));
    Store.addMessage(message);
  };

  return (
    <Grid container direction="column" style={{ flexWrap: "nowrap" }}>
      <Grid item>
        <Paper variant="outlined">
          <label htmlFor="name">
            Name:&nbsp;
            <input
              type="text"
              id={"name"}
              placeholder={"Enter your name..."}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </Paper>
      </Grid>
      <Grid
        item
        style={{
          flex: "auto",
          overflowY: "auto",
        }}
      >
        <Paper
          style={{
            height: "100%",
            width: "100%",
            display: "table",
          }}
          elevation={0}
          variant="outlined"
        >
          <div
            style={{
              display: "table-cell",
              verticalAlign: "bottom",
            }}
            ref={divRef}
          >
            {/* {Store.messages[Store.currentRoom].map((m, index) => (
              <ChatMessage key={index} message={m.message} name={m.name} />
            ))} */}
          </div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper variant="outlined">
          <ChatInput
            ws={ws}
            onSubmitMessage={(messageString) => submitMessage(messageString)}
          />
        </Paper>
      </Grid>
    </Grid>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Chat);
