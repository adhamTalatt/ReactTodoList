import { createContext, useReducer, useContext } from "react";
import todoReducer from "../reducers/todoReducer";

export let ContextToDoList = createContext([]);

const ContextTodo = ({ children }) => {
  const [toDos, dispatch] = useReducer(todoReducer, []);
  return (
    <ContextToDoList.Provider value={{ toDos, dispatch }}>
      {children}
    </ContextToDoList.Provider>
  );
};

export default ContextTodo;

export const useTodo = () => {
  return useContext(ContextToDoList);
};
