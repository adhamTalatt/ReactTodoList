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

//Context
import { useContext } from "react";
import { ContextToDoList } from "../contexts/ContextTodoList";

import { useState } from "react";
import DeleteCheck from "./DeleteCheck";
import EditTodo from "./EditTodo";
export default function Todo({ todo }) {
  // ***** React Hooks *****
  const { toDos, setToDos } = useContext(ContextToDoList);
  const [deletCheckOpen, setdeletCheckOpen] = useState(false);
  const [editTodo, seteditTodo] = useState(false);
  const [editTodoValue, setEditTodoValue] = useState({
    title: todo.title,
    details: todo.details,
  });
  // ===== React Hooks =====
  // Handle Event Functions
  function handleEditebutten() {
    seteditTodo(true);
  }
  function handleEditeValueDetails(eventValue) {
    setEditTodoValue({ ...editTodoValue, details: eventValue });
  }
  function handleEditeValueTitle(eventValue) {
    setEditTodoValue({ ...editTodoValue, title: eventValue });
  }
  function handleEditeClose() {
    seteditTodo(false);
  }
  function handleEditeConfirm() {
    const updateTodo = toDos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: editTodoValue.title,
          details: editTodoValue.details,
        };
      } else {
        return t;
      }
    });
    setToDos(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
    handleEditeClose();
  }

  function handleDeleteClose() {
    setdeletCheckOpen(false);
  }
  function handleDeleteConfirm() {
    const updatedTodo = toDos.filter((t) => {
      if (t.id === todo.id) {
        return false;
      } else {
        return true;
      }
    });
    setToDos(updatedTodo);

    localStorage.setItem("todos", JSON.stringify(updatedTodo));
  }
  function handleCheckClick() {
    const udatedTodos = toDos.map((e) => {
      if (e.id === todo.id) {
        e.isCompleted = !e.isCompleted;
      }
      return e;
    });

    setToDos(udatedTodos);

    localStorage.setItem("todos", JSON.stringify(udatedTodos));
  }
  // ======= Handle Event Functions ======

  return (
    <>
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
            <Grid xs={8} className="todoRespo">
              {" "}
              <Typography
                variant="h5"
                sx={{
                  textAlign: "right",
                  textDecoration:
                    todo.isCompleted === true ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                paragraph={true}
                style={{
                  textAlign: "right",
                  width: "100% ",
                  textDecoration:
                    todo.isCompleted === true ? "line-through" : "none",
                }}
              >
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/*(CHECK) ICON BUTTON */}
              <IconButton
                className="iconButton"
                sx={{
                  color: todo.isCompleted === true ? "#fff" : "#8bc34a",
                  background: todo.isCompleted === true ? "#8bc34a" : "#fff",
                  border: "3px solid #8bc34a",
                }}
                onClick={() => handleCheckClick()}
              >
                <CheckIcon />
              </IconButton>
              {/*===== (CHECK) ICON BUTTON ===== */}

              {/* (EDITE) ICON BUTTON */}
              <IconButton
                className="iconButton"
                sx={{
                  color: "#1769aa",
                  background: "white",
                  border: "3px solid #1769aa",
                }}
                onClick={handleEditebutten}
              >
                <EditIcon />
              </IconButton>

              {/* ===== (EDITE) ICON BUTTON ===== */}

              {/* DELETE ICON BUTTUN */}
              <IconButton
                className="iconButton"
                onClick={() => {
                  setdeletCheckOpen(true);
                }}
                sx={{
                  color: "#b23c17",
                  background: "white",
                  border: "3px solid #b23c17",
                }}
              >
                <DeleteIcon />
              </IconButton>
              {/* ===== DELETE ICON BUTTUN ===== */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* DELETE DIALOG */}

      {/* ***** DELETE DIALOG ***** */}
      <DeleteCheck
        open={deletCheckOpen}
        funOnClase={handleDeleteClose}
        funDelete={handleDeleteConfirm}
      />
      {/* ===== DELETE DIALOG ===== */}

      {/* UPDATE DIALOG */}

      {/* ***** UPDATE DIALOG ***** */}
      <EditTodo
        open={editTodo}
        editValueRead={editTodoValue}
        closefun={handleEditeClose}
        editValuefunTitle={handleEditeValueTitle}
        editValuefunDetails={handleEditeValueDetails}
        funEditConfirm={handleEditeConfirm}
      />
      {/* ===== UPDATE DIALOG ===== */}
    </>
  );
}
