import Snackbar from "@mui/material/Snackbar";

import Alert from "@mui/material/Alert";
export default function SnackBar({ open, massage }) {
  const action = (
    <>
      {/* <IconButton size="small" aria-label="close" color="inherit"> */}
      {/* <CloseIcon fontSize="small" /> */}
      {/* </IconButton> */}
    </>
  );

  return (
    <div style={{ direction: "rtl" }}>
      <Snackbar open={open} autoHideDuration={6000} action={action}>
        <Alert variant="filled" severity="success">
          {massage}
        </Alert>
      </Snackbar>
    </div>
  );
}
