import React from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Hidden from "@material-ui/core/Hidden";

const Header = observer(({ Store }) => {
  return (
    <Paper
      square
      style={{
        height: "100%",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <Grid
        container
        style={{
          height: "100%",
        }}
      >
        <Grid
          container
          item
          direction="row"
          xs={2}
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            style={{ width: "50px", flexBasis: "50px" }}
          >
            <MoreVertIcon
              fontSize="large"
              style={{
                cursor: "pointer",
              }}
            />
          </Grid>
          <Hidden smDown>
            <Grid
              item
              container
              alignItems="center"
              style={{
                maxWidth: "calc(100% - 60px)",
                flexBasis: "calc(100% - 60px)",
              }}
            >
              <label htmlFor="name">Welcome {Store.nickName}:&nbsp;</label>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </Paper>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Header);
