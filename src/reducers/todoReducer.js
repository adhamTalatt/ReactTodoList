import { v4 as uuidv4 } from "uuid";
export default function todoReducer(currentTodo, action) {
  // ==================== Read TODOS================
  switch (action.type) {
    case "read": {
      const storageTodos = JSON.parse(localStorage.getItem("todos"));
      if (storageTodos == null) {
        return currentTodo;
      } else {
        return storageTodos;
      }
    }
    // ==================== Add TODO================
    case "added": {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.newTitle,
        details: "يمكنك وضع شرح للماهمة ..",
        isCompleted: false,
      };
      const updateTodo = [...currentTodo, newTodo];

      // for add toDos object in locacl Storage Receives
      // setItem Receives parameters (key ,value)
      // we should convert toDos form array to string because locacl Storage do not understand  array  or anything  it understand  string value only
      // we used JSON.stringify() for convert toDos from array to string
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    }
    // ==================== Update TODO================
    case "update": {
      const updateTodo = currentTodo.map((t) => {
        if (t.id === action.payload.todoValueId) {
          return {
            ...t,
            title: action.payload.editTitle,
            details: action.payload.editDetails,
          };
        } else {
          return t;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    }
    // ==================== Delete TODO ================
    case "delete": {
      const updateTodo = currentTodo.filter((t) => {
        if (t.id === action.payload.DialogToDoID) {
          return false;
        } else {
          return true;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    }
    //===================== toggledCompleted ====================
    case "toggledCompleted": {
      const updateTodo = currentTodo.map((e) => {
        if (e.id == action.payload.id) {
          const updateIsCompleted = { ...e, isCompleted: !e.isCompleted };
          return updateIsCompleted;
        }
        return e;
      });
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    }

    default: {
      console.log("this action unfinded", action.type);
    }
  }
}
