import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import NamePopup from "./components/NamePopup";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    width: "100%",
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
      {Store.namePopupShow && <NamePopup />}
      <Paper className={classes.paper} square elevation={0}>
        <Grid container direction="row">
          <Grid item style={{ height: "48px" }} xs={12}>
            <Header />
          </Grid>
          <Grid item style={{ height: "calc(100% - 48px)" }} xs={2}>
            <Navbar />
          </Grid>
          <Grid item style={{ height: "calc(100% - 48px)" }} xs={10}>
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
