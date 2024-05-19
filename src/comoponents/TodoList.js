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
import Grid from "@mui/material/Unstable_Grid2";
// for import textinput from Materl UL
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";

import { useContext } from "react";
import { ContextToDoList } from "../contexts/ContextTodoList";
export default function TodoList() {
  const { toDos, setToDos } = useContext(ContextToDoList);

  const [titleInput, setTitleIput] = useState("");

  // START ICONT TASKS

  //ICON TODO  BUTTUN CHECK
  // ===End ICONT TASKS
  function handleClickbtn() {
    const netTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setToDos([...toDos, netTodo]);
    setTitleIput("");
  }

  let showToDos = toDos.map((e) => {
    return <Todo key={e.id} todo={e} />;
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
          <Grid container sx={{ marginTop: "20px" }} spacing={2}>
            <Grid xs={8}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-password-input"
                label="اضاقة مهامة"
                value={titleInput}
                onChange={(event) => {
                  setTitleIput(event.target.value);
                }}
              />
            </Grid>
            <Grid xs={4}>
              <Button
                onClick={() => {
                  handleClickbtn();
                }}
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
          {/* ====== End ADD TO DO */}
        </CardContent>
      </Card>
    </Container>
  );
}
