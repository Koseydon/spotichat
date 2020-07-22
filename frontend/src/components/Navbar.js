import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
}));

const Navbar = observer(({ Store }) => {
  // const [newRoom, setNewRoom] = useState("");
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      style={{ height: "100%", flexWrap: "nowrap" }}
    >
      {/* <Grid item>
        <Paper square>
          <form
            action="."
            onSubmit={(e) => {
              e.preventDefault();
              Store.addRoom(newRoom);
              setNewRoom("");
            }}
          >
            <label htmlFor="name">
              Room:&nbsp;
              <input
                type="text"
                id={"room"}
                value={newRoom}
                placeholder={"Enter room..."}
                onChange={(e) => setNewRoom(e.target.value)}
              />
            </label>
          </form>
        </Paper>
      </Grid> */}

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
          square
        >
          <div
            style={{
              display: "table-cell",
            }}
          >
            {Store.rooms.map((room, key) => (
              <ListItem
                onClick={() => Store.changeRoom(room.roomId)}
                style={{ paddingLeft: 0 }}
                button
                disableRipple
                component={Link}
                key={Store.rooms.indexOf(room)}
                divider
                className={
                  key + 1 === Store.currentRoom ? classes.selected : ""
                }
              >
                <Grid container direction="row">
                  <Grid
                    item
                    container
                    alignItems="center"
                    justify="center"
                    style={{ width: "50px", flexBasis: "50px" }}
                  >
                    <AccountCircleIcon fontSize="large" />
                  </Grid>
                  <Hidden smDown>
                    <Grid item style={{ height: "calc(100% - 50px)" }}>
                      <ListItemText primary={room.roomName} />
                    </Grid>
                  </Hidden>
                </Grid>
              </ListItem>
            ))}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Navbar);
