import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Navbar = observer(({ Store }) => {
  const [rooms, setRooms] = useState([
    { roomName: "room1", roomId: "room1" },
    { roomName: "room2", roomId: "room2" },
    { roomName: "room3", roomId: "room3" },
  ]);
  const [newRoom, setNewRoom] = useState("");

  const addRoom = (name) => {
    const newRooms = rooms;
    newRooms.push({ roomName: name, roomId: 4 });
    setRooms(newRooms);
  };

  const changeRoom = (id) => {
    if (!Store.messages[id]) {
      Store.messages[id] = [];
    }
    Store.changeRoom(id);
  };

  return (
    <Grid container direction="column" style={{ flexWrap: "nowrap" }}>
      <Grid item>
        <Paper variant="outlined">
          <form
            action="."
            onSubmit={(e) => {
              e.preventDefault();
              addRoom(newRoom);
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
          {rooms.map((room) => (
            <Typography key={rooms.indexOf(room)}>
              <Link onClick={() => changeRoom(room.roomId)}>
                {room.roomName}
              </Link>
            </Typography>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Navbar);
