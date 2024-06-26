import "./App.css";
import TodoList from "./comoponents/TodoList";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContextTodo from "./contexts/ContextTodoList";

import { TosatProvider } from "./contexts/ToastContext";

function App() {
  // create theme in Material Ui for Definition of mian font in ReactTodoList Project
  // this way form Material Ui (Theme) because We Can't put  fonts with  the traditional way in Material

  const theme = createTheme({
    typography: {
      fontFamily: "Cairo",
    },
    palette: {
      primary: {
        main: "#546e7a",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ContextTodo>
        <TosatProvider>
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
            <TodoList />
          </div>
        </TosatProvider>
      </ContextTodo>
    </ThemeProvider>
  );
}

export default App;
