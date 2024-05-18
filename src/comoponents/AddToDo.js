import Grid from "@mui/material/Unstable_Grid2";
// for import textinput from Materl UL
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AddToDO() {
  return (
    <>
      <Grid container sx={{ marginTop: "20px" }} spacing={2}>
        <Grid xs={8}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-password-input"
            label="اضاقة مهامة"
            autoComplete="current-password"
          />
        </Grid>
        <Grid xs={4}>
          <Button
            variant="contained"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            اضافة
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
