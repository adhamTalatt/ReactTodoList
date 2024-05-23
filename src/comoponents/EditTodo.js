import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditTodo({
  open,
  closefun,
  editValueRead,
  editValuefunTitle,
  editValuefunDetails,
  funEditConfirm,
}) {
  const handleClose = () => {
    closefun();
  };
  // console.log(editValueRead.title);
  return (
    <>
      <Dialog style={{ direction: "rtl" }} open={open} onClose={handleClose}>
        <DialogTitle>تحديث المهامة</DialogTitle>
        <DialogContent>
          {/* <DialogContentText> */}
          {/* To subscribe to this website, please enter your email address here. */}
          {/* We will send updates occasionally. */}
          {/* </DialogContentText> */}
          <TextField
            required
            margin="dense"
            onChange={(event) => {
              editValuefunTitle(event.target.value);
            }}
            label="اسم المهمة"
            fullWidth
            variant="standard"
            value={editValueRead.title}
          />
          <TextField
            required
            margin="dense"
            onChange={(event) => {
              editValuefunDetails(event.target.value);
            }}
            label="تفاصيل المهمة"
            fullWidth
            variant="standard"
            value={editValueRead.details}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={funEditConfirm}>تحديث</Button>
          <Button onClick={handleClose}>اغلاق</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
