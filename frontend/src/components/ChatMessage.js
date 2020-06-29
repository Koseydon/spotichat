import React from "react";
import Grid from "@material-ui/core/Grid";
import "./ChatMessage.css";

function App({ name, message }) {
  return (
    <div className="bubble white">
      <Grid container direction="column" wrap="nowrap">
        <Grid item>
          <strong>{name}</strong>
        </Grid>
        <Grid item>
          <em>{message}</em>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
