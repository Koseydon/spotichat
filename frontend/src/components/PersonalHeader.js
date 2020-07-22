import React from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";

const PersonalHeader = observer(({ Store }) => {
  const personalSettingsAnchorRef = React.useRef(null);

  return (
    <Paper
      square
      elevation={0}
      style={{
        height: "100%",
      }}
    >
      <Grid
        container
        style={{
          height: "100%",
        }}
      >
        <Grid container item direction="row">
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            style={{ width: "50px", flexBasis: "50px" }}
          >
            <IconButton
              style={{
                padding: 0,
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
              ref={personalSettingsAnchorRef}
              onClick={Store.togglePersonalSettingsOpen}
              disableRipple
            >
              <MoreVertIcon fontSize="large" />
            </IconButton>
            <Popper
              open={Store.isPersonalSettingsOpen}
              anchorEl={personalSettingsAnchorRef.current}
              transition // ??
              disablePortal // ??
              placement="bottom-start"
              style={{
                zIndex: 1,
              }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener
                      onClickAway={Store.closePersonalSettingsOpen}
                    >
                      <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              container
              alignItems="center"
              style={{
                maxWidth: "calc(100% - 50px)",
                flexBasis: "calc(100% - 50px)",
              }}
            >
              <label htmlFor="name">Welcome {Store.nickName}:&nbsp;</label>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(PersonalHeader);
