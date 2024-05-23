import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteCheck({ open, funOnClase, funDelete }) {
  function handleClose() {
    funOnClase();
  }
  function handleDelete() {
    funDelete();
  }
  return (
    <>
      <div>
        <Dialog
          style={{ direction: "rtl" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            ؟هل انت متاكي من حذف المهمة
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              لا يمكنك التراجع عن الحذف بعد اتمامة
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ color: "#b23c17" }}
              autoFocus
              onClick={handleDelete}
            >
              نعم. قم بالحذف
            </Button>
            <Button onClick={handleClose}>إغلاق</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
