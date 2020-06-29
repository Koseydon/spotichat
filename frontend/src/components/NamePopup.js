import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const NamePopup = observer(({ Store }) => {
  const [nickName, setNickName] = useState("");

  return (
    <div>
      <Dialog
        onClose={Store.toggleNamePopupShow}
        aria-labelledby="customized-dialog-title"
        open={Store.namePopupShow}
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
      >
        <DialogContent>
          <DialogContentText>Please enter your nickname</DialogContentText>
          <form
            action="."
            onSubmit={(e) => {
              e.preventDefault();
              Store.setNickName(nickName);
              Store.toggleNamePopupShow();
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              label="Nickname"
              fullWidth
              type="text"
              id={"nickName"}
              autoComplete="off"
              onChange={(e) => setNickName(e.target.value)}
            />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(NamePopup);
