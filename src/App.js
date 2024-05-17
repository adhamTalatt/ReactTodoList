import "./App.css";
import TodoList from "./comoponents/TodoList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#191b1f",
        direction: "rtl",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
