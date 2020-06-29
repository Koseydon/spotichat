import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: `20px`,
    },
  },
});

function ChatInput({ onSubmitMessage }) {
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const submitMessage = (e) => {
    e.preventDefault();
    onSubmitMessage(message);
    setMessage("");
  };

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
        <Grid
          style={{ width: "60px", flexBasis: "60px" }}
          container
          item
          justify="center"
          alignItems="center"
        >
          <EmojiEmotionsIcon
            fontSize="large"
            style={{
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid
          item
          style={{
            maxWidth: "calc(100% - 60px)",
            flexBasis: "calc(100% - 60px)",
          }}
        >
          <TextField
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
            }}
            fullWidth
            placeholder={"Enter message..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid
          style={{ width: "60px", flexBasis: "60px" }}
          container
          item
          justify="center"
          alignItems="center"
        >
          <SendIcon
            style={{
              cursor: "pointer",
            }}
            fontSize="large"
            onClick={(e) => submitMessage(e)}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default ChatInput;
