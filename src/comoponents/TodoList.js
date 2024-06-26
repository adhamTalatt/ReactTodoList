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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Textarea from "@mui/joy/Textarea";

import { useState, useContext, useEffect, useMemo } from "react";
import { useTodo } from "../contexts/ContextTodoList";
import { ToastContext } from "../contexts/ToastContext";

export default function TodoList() {
  // const { toDos2, setToDos } = useContext(ContextToDoList);

  const { toDos, dispatch } = useTodo();

  const { handleToast } = useContext(ToastContext);

  // ====Input State====

  const [titleInput, setTitleIput] = useState("");
  const [displayTodosType, setdisplayTodosType] = useState("all");

  // ====Delet State====
  const [deletCheckOpen, setdeletCheckOpen] = useState(false);
  const [DialogToDo, setDialogToDo] = useState(null);

  // ====Edit State====

  const [editTodoValue, setEditTodoValue] = useState({});
  const [editTodo, seteditTodo] = useState(false);

  //==== Search State====
  const [searchInput, setSearchInput] = useState("");
  // ***** handleAddTodoClick ***** (for add new todo)
  function handleAddTodoClick() {
    dispatch({
      type: "added",
      payload: {
        newTitle: titleInput,
      },
    });
    setTitleIput("");
    handleToast(".تم انشاء ماهمه جديده");
  }
  // ===== handleAddTodoClick =====

  // useEffect Hook for read todos from locacl Storage
  useEffect(() => {
    dispatch({
      type: "read",
    });
  }, []);
  //  ===== useEffect Hook for read todos from locacl Storage =====

  // ***** filter for show data taggle btton *****
  function dispalyedTodosType(e) {
    setdisplayTodosType(e.target.value);
  }

  const completedTodos = useMemo(() => {
    return toDos.filter((t) => {
      return t.isCompleted;
    });
  }, [toDos]);

  const notCompletedTodos = useMemo(() => {
    return toDos.filter((t) => {
      return !t.isCompleted;
    });
  }, [toDos]);

  let todoToBeRenfered = toDos;
  if (displayTodosType === "non-completed") {
    todoToBeRenfered = notCompletedTodos;
  } else if (displayTodosType === "completed") {
    todoToBeRenfered = completedTodos;
  } else {
    todoToBeRenfered = toDos;
  }
  const searchWithTitle = todoToBeRenfered.filter((todoItem) => {
    return searchInput.toLowerCase().trim() === ""
      ? todoItem
      : todoItem.title.toLowerCase().includes(searchInput);
  });

  // ===== filter for show data ====
  function handleDeleteClose() {
    setdeletCheckOpen(false);
  }
  // let todoDialog = null;
  function showDeleteDialog(todo) {
    setDialogToDo(todo);
    setdeletCheckOpen(true);
  }
  function handleDeleteConfirm() {
    dispatch({
      type: "delete",
      payload: {
        DialogToDoID: DialogToDo.id,
      },
    });
    handleToast("تم حذف المهامة");
    handleDeleteClose();
  }
  // ==start=>==editeDeilogFunction======
  function handleEditebutten(todo) {
    setEditTodoValue(todo);
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
    dispatch({
      type: "update",
      payload: {
        todoValueId: editTodoValue.id,
        editTitle: editTodoValue.title,
        editDetails: editTodoValue.details,
      },
    });
    handleToast("تم التعديل علي المهامة");
    seteditTodo(false);
  }
  // ==end=>==editeDeilogFunction======

  // ===============input search condetion =======
  const searchBoxCondonent = () => {
    return (
      <div
        style={{
          marginTop: "5%",
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "5%",
          direction: "rtl",
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          placeholder=" بحث عن مهامي ... "
          variant="outlined"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
    );
  };

  let showToDos = searchWithTitle.map((e) => {
    return (
      <Todo
        key={e.id}
        todo={e}
        showDelete={showDeleteDialog}
        showEdite={handleEditebutten}
      />
    );
  });
  return (
    <>
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
            {/*start search input  */}
            {toDos.length >= 3 ? searchBoxCondonent() : ""}
            {/*end search input  */}
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
      {/* **Start*** DELETE DIALOG ***** */}
      <Dialog
        style={{ direction: "rtl" }}
        open={deletCheckOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ؟هل انت متاكي من حذف المهمة
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد اتمامة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ color: "#b23c17" }}
            autoFocus
            onClick={handleDeleteConfirm}
          >
            نعم. قم بالحذف
          </Button>
          <Button onClick={handleDeleteClose}>إغلاق</Button>
        </DialogActions>
      </Dialog>
      {/* ==End=== DELETE DIALOG ===== */}

      {/* ==Start=== Edit DIALOG ===== */}
      <Dialog
        style={{ direction: "rtl" }}
        open={editTodo}
        onClose={handleEditeClose}
      >
        <DialogTitle>تحديث المهامة</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            onChange={(event) => {
              handleEditeValueTitle(event.target.value);
            }}
            label="اسم المهمة"
            fullWidth
            variant="standard"
            value={editTodoValue.title}
          />
          <TextField
            margin="dense"
            onChange={(event) => {
              handleEditeValueDetails(event.target.value);
            }}
            label="تفاصيل المهمة"
            fullWidth
            variant="standard"
            value={editTodoValue.details}
            multiline
            maxRows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleEditeConfirm();
            }}
          >
            تحديث
          </Button>
          <Button onClick={handleEditeClose}>اغلاق</Button>
        </DialogActions>
      </Dialog>

      {/* ==End=== Edit DIALOG ===== */}
    </>
  );
}
