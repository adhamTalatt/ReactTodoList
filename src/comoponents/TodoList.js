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

import { useState, useContext, useEffect } from "react";
import { ContextToDoList } from "../contexts/ContextTodoList";
export default function TodoList() {
  const { toDos, setToDos } = useContext(ContextToDoList);
  const [titleInput, setTitleIput] = useState("");
  const [displayTodosType, setdisplayTodosType] = useState("all");
  // ***** handleAddTodoClick ***** (for add new todo)
  function handleAddTodoClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const upDateTODO = [...toDos, newTodo];
    setToDos(upDateTODO);

    // for add toDos object in locacl Storage Receives
    // setItem Receives parameters (key ,value)
    // we should convert toDos form array to string because locacl Storage do not understand  array  or anything  it understand  string value only
    // we used JSON.stringify() for convert toDos from array to string
    localStorage.setItem("todos", JSON.stringify(upDateTODO));
    setTitleIput("");
  }
  // ===== handleAddTodoClick =====

  // useEffect Hook for read todos from locacl Storage
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos == null) {
      setToDos(toDos);
    } else {
      setToDos(storageTodos);
    }
  }, []);
  //  ===== useEffect Hook for read todos from locacl Storage =====

  // ***** filter for show data taggle btton *****
  function dispalyedTodosType(e) {
    setdisplayTodosType(e.target.value);
  }
  const completedTodos = toDos.filter((t) => {
    return t.isCompleted;
  });
  const notCompletedTodos = toDos.filter((t) => {
    return !t.isCompleted;
  });

  let todoToBeRenfered = toDos;
  if (displayTodosType === "non-completed") {
    todoToBeRenfered = notCompletedTodos;
  } else if (displayTodosType === "completed") {
    todoToBeRenfered = completedTodos;
  } else {
    todoToBeRenfered = toDos;
  }
  let showToDos = todoToBeRenfered.map((e) => {
    return <Todo key={e.id} todo={e} />;
  });
  // ===== filter for show data ====

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
            value={displayTodosType}
            exclusive
            onChange={dispalyedTodosType}
            aria-label="text alignment"
            color="primary"
          >
            <ToggleButton value="non-completed"> غير منجز</ToggleButton>
            <ToggleButton value="completed">المنجز</ToggleButton>
            <ToggleButton value="all"> الكل </ToggleButton>
          </ToggleButtonGroup>
          {/* ====== End Toggle Button */}

          {/* Start ALL TODOS */}
          <div className="showdata">{showToDos}</div>
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
                  handleAddTodoClick();
                }}
                variant="contained"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                color="primary"
                disabled={titleInput <= 0}
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
