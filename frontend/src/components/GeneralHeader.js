import React from "react";
import { inject, observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SettingsIcon from "@material-ui/icons/Settings";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";

const GeneralHeader = observer(({ Store }) => {
  const generalSettingsAnchorRef = React.useRef(null);

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
            style={{
              width: "calc(100% - 50px)",
              flexBasis: "calc(100% - 50px)",
            }}
          ></Grid>
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
              onClick={Store.toggleGeneralSettingsOpen}
              ref={generalSettingsAnchorRef}
              disableRipple
            >
              <SettingsIcon fontSize="large" />
            </IconButton>

            <Popper
              open={Store.isGeneralSettingsOpen}
              anchorEl={generalSettingsAnchorRef.current}
              transition // ??
              disablePortal // ??
              placement="bottom-end"
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
                      onClickAway={Store.closeGeneralSettingsOpen}
                    >
                      <MenuList>
                        <MenuItem onClick={Store.toggleDarkMode}>
                          Dark Mode
                          <Switch size="small" checked={Store.isDarkMode} />
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(GeneralHeader);
