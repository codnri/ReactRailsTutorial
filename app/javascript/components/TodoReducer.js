const initialState = {
  todoList: []
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("action.todo");
      console.log(action.todo);
      return {
        todoList: [...state.todoList, action.todo]
      };
    case "RESET_TODO":
      return {
        todoList: []
      };
    default:
      return state;
  }
};
