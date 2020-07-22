import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import NamePopup from "./components/NamePopup";
import PersonalHeader from "./components/PersonalHeader";
import GeneralHeader from "./components/GeneralHeader";
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
    <Container maxWidth="lg" className={classes.container}>
      {Store.namePopupShow && <NamePopup />}
      <Paper className={classes.paper} square elevation={0}>
        <Grid container direction="row">
          <Grid
            item
            style={
              ({
                height: "48px",
              },
              Store.isDarkMode
                ? {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRight: "1px solid rgba(255, 255, 255, 0.12)",
                  }
                : {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                  })
            }
            xs={3}
          >
            <PersonalHeader />
          </Grid>
          <Grid
            item
            style={
              ({
                height: "48px",
              },
              Store.isDarkMode
                ? {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                  }
                : {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                  })
            }
            xs={9}
          >
            <GeneralHeader />
          </Grid>
          <Grid
            item
            style={
              ({
                height: "calc(100% - 48px)",
              },
              Store.isDarkMode
                ? {
                    borderRight: "1px solid rgba(255, 255, 255, 0.12)",
                  }
                : {
                    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                  })
            }
            xs={3}
          >
            <Navbar />
          </Grid>
          <Grid
            item
            style={{
              height: "calc(100% - 48px)",
            }}
            xs={9}
          >
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
