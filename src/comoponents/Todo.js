import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// grid for style
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

// icons for Buttons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo() {
  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              {" "}
              <Typography variant="h5" sx={{ textAlign: "right" }}>
                المهمة الاولي
              </Typography>
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                sx={{
                  color: "#8bc34a",
                  background: "white",
                  border: "3px solid #8bc34a ",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#8bc34a",
                  background: "white",
                  border: "3px solid #8bc34a ",
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "red",
                  background: "white",
                  border: "3px solid red ",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
