import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Components
import Todo from "./Todo";

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            مهامي
          </Typography>
          <Divider />
          {/*  Start Toggle Button */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            value={""}
            exclusive
            onChange={""}
            aria-label="text alignment"
          >
            <ToggleButton value="right"> غير منجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left"> الكل </ToggleButton>
          </ToggleButtonGroup>
          {/* ====== End Toggle Button */}

          {/* Start ALL TODOS */}
          <Todo />
          <Todo />

          {/* ====== End ALL TODOS */}
        </CardContent>
      </Card>
    </Container>
  );
}
