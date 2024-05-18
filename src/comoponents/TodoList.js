// From Material Ui
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// this library from npm for hlep you to dealing with (id) in objet or anything else
import { v4 as uuidv4 } from "uuid";

// Components
import Todo from "./Todo";
import AddToDO from "./AddToDo";

export default function TodoList() {
  const { v4: uuidv4 } = require("uuid");
  const toDos = [
    {
      id: uuidv4(),
      title: "قرائة كتاب",
      details: "شسيشسيشسيشسيشسيشسيشسيشسيشس",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "ممارسةالرياضة",
      details: "شسيشسيشسيشسيشسيشسيشسيشسيشس",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "تعلم شئ جديد",
      details: "سيشسdgdfgdfgdfgdfgdfgيشسيشسيشسيشس",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "الصلاة",
      details: "شسيشسيشسيشسيشسيشسيشسيشسيشس",
      isCompleted: false,
    },
  ];
  const showToDos = toDos.map((e) => {
    return (
      <Todo
        key={e.id}
        title={e.title}
        detail={e.details}
        isComplet={e.isCompleted}
      />
    );
  });
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h2"
            style={{ fontWeight: "700", marginBottom: "30px" }}
          >
            مهامي
          </Typography>
          <Divider />
          {/*  Start Toggle Button */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            value={""}
            exclusive
            onChange={() => {}}
            aria-label="text alignment"
          >
            <ToggleButton value="right"> غير منجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left"> الكل </ToggleButton>
          </ToggleButtonGroup>
          {/* ====== End Toggle Button */}

          {/* Start ALL TODOS */}
          {showToDos}
          {/* ====== End ALL TODOS */}

          {/* ====== Start ADD TO DO*/}
          <AddToDO />
          {/* ====== End ADD TO DO */}
        </CardContent>
      </Card>
    </Container>
  );
}
