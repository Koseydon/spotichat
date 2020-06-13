import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1),
  },
  container: {
    display: "flex",
    height: "100vh",
  },
}));

const App = observer(({ Store }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Paper className={classes.paper} elevation={0} variant="outlined">
        <Grid container>
          <Grid container xs={2}>
            <Navbar />
          </Grid>
          <Grid container xs={10}>
            <Chat />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(App);
