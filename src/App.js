import "./App.css";
import TodoList from "./comoponents/TodoList";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ContextToDoList } from "./contexts/ContextTodoList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const toDoList = [
  {
    id: uuidv4(),
    title: "المهمة الاولي",
    details: "تفاصيل المهمة الاولي ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الثانية",
    details: "تفاصيل المهمة الثانية ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الثالثة",
    details: "تفاصيل المهمة الثالثة ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "المهمة الرابعة",
    details: "تفاصيل المهمة الرابعة ",
    isCompleted: false,
  },
];
function App() {
  // create theme in Material Ui for Definition of mian font in ReactTodoList Project
  // this way form Material Ui (Theme) because We Can't put  fonts with  the traditional way in Material

  const [toDos, setToDos] = useState(toDoList);
  const theme = createTheme({
    typography: {
      fontFamily: "Cairo",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          background: "#191b1f",
          direction: "rtl",
          minHeight: "100vh",
        }}
      >
        <ContextToDoList.Provider value={{ toDos, setToDos }}>
          <TodoList />
        </ContextToDoList.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
