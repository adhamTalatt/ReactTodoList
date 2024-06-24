import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
import { useToast } from "../contexts/ToastContext";

import ShowTODOFull from "./ShowTODOFull";

//
export default function Todo({ todo, showDelete, showEdite }) {
  // ***** React Hooks *****
  const { toDos, setToDos } = useContext(ContextToDoList);
  const { handleToast } = useToast();
  const [openDetails, setOpenDetails] = useState(false);
  // ===== React Hooks =====
  // Handle Event Functions

  function handleCheckClick() {
    const udatedTodos = toDos.map((e) => {
      if (e.id === todo.id) {
        e.isCompleted = !e.isCompleted;
        e.isCompleted === true
          ? handleToast("تم النتهاء من المهمة ")
          : handleToast(" لم يبتم الانتهاء من المهمة بعد");
      }
      return e;
    });

    setToDos(udatedTodos);

    localStorage.setItem("todos", JSON.stringify(udatedTodos));
  }
  // ======= Handle Event Functions ======
  const detailsSlice =
    todo.details.length >= 30
      ? `${todo.details.substring(0, 30)} ...`
      : todo.details;
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
            <Grid xs={12} md={8} className="todoRespo">
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
                {detailsSlice}
                {/* {console.log(todo.details)} */}
                {todo.details.length >= 50 ? (
                  <span style={{ display: "block" }}>
                    <Button
                      size="small"
                      onClick={() => {
                        setOpenDetails(true);
                      }}
                    >
                      قرائة المزيد
                    </Button>
                  </span>
                ) : (
                  ""
                )}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={4}
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
                onClick={() => {
                  showEdite(todo);
                }}
              >
                <EditIcon />
              </IconButton>

              {/* ===== (EDITE) ICON BUTTON ===== */}

              {/* DELETE ICON BUTTUN */}
              <IconButton
                className="iconButton"
                onClick={() => {
                  showDelete(todo);
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

      {/* UPDATE DIALOG */}
      <ShowTODOFull
        title={todo.title}
        details={todo.details}
        open={openDetails}
        handlOpenfun={setOpenDetails}
      />
    </>
  );
}
