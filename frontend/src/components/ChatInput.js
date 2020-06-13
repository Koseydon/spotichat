import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function ChatInput({ onSubmitMessage }) {
  const [message, setMessage] = useState("");

  return (
    <form
      action="."
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitMessage(message);
        setMessage("");
      }}
    >
      <Grid wrap="nowrap" container direction="row">
        <TextField
          fullWidth
          placeholder={"Enter message..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="filled"
          size="small"
        />
        <input type="submit" value={"Send"} />
      </Grid>
    </form>
  );
}

export default ChatInput;
