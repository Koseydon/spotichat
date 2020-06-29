import React, { useRef, useEffect } from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const URL = "ws://localhost:3030";
const ws = new WebSocket(URL);

const Chat = observer(({ Store }) => {
  const divRef = useRef(null);
  //const [ws, setWs] = useState(new WebSocket(URL));

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");

      // auto join room1
      Store.changeRoom(1);
    };
  });

  useEffect(() => {
    ws.onmessage = (e) => {
      // on receiving a message, add it to the list of messages
      const receivingMessage = JSON.parse(e.data);
      Store.addMessage(receivingMessage);
    };

    // each time new message arrives scrools down automaticly to bottom of chat
    divRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  const submitMessage = (messageString) => {
    if (messageString) {
      const instantMessage = {};
      const message = { name: Store.nickName, message: messageString };
      instantMessage[Store.currentRoom] = [message];
      ws.send(JSON.stringify(instantMessage));
      Store.addMessage(instantMessage);
    }
  };

  return (
    <Grid
      container
      direction="column"
      style={{ height: "100%", flexWrap: "nowrap" }}
    >
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
        >
          <div
            style={{
              display: "table-cell",
              verticalAlign: "bottom",
            }}
            ref={divRef}
          >
            {Store.messages[Store.currentRoom]?.map((m, index) => (
              <ChatMessage key={index} message={m.message} name={m.name} />
            ))}
          </div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper square style={{ paddingTop: "10px", paddingBottom: "10px" }}>
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
