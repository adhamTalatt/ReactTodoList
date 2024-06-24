import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// const Transition = React.forwardRef(function Transition(props, ref) {
// return <Slide direction="up" ref={ref} {...props} />;
// });

export default function ShowTODOFull({ title, details, open, handlOpenfun }) {
  const handleClose = () => {
    handlOpenfun(false);
  };

  return (
    <>
      <Dialog
        style={{ direction: "rtl" }}
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#b23c17" }}>
            اغلاق
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
