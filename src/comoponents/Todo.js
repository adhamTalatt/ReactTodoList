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

export default function Todo({ title, details }) {
  return (
    <div>
      <Card
        className="todoCard"
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
                {title}
              </Typography>
              <Typography
                paragraph={true}
                wrapped
                style={{
                  textAlign: "right",
                  width: "100% ",
                }}
              >
                {details}
              </Typography>
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                className="iconButton"
                sx={{
                  color: "#8bc34a",
                  background: "white",
                  border: "3px solid #8bc34a",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                sx={{
                  color: "#1769aa",
                  background: "white",
                  border: "3px solid #1769aa",
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                sx={{
                  color: "#b23c17",
                  background: "white",
                  border: "3px solid #b23c17",
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
