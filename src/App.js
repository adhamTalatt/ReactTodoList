import "./App.css";
import TodoList from "./comoponents/TodoList";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  // create theme in Material Ui for Definition of mian font in ReactTodoList Project
  // this way form Material Ui (Theme) because We Can't put  fonts with  the traditional way in Material

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
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
