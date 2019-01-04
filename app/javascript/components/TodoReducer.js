const initialState = {
  todoList: []
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    

    case 'DELETE_TODO':
    return Object.assign({}, state, {
      isFetching: true
    });
    case 'DELETE_TODO_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
    });
    
    case 'UPDATE_TODO':
    return Object.assign({}, state, {
      isFetching: true
    });
    case 'UPDATE_TODO_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
    });
    
    
    case 'ADD_NEW_TODO':
    return Object.assign({}, state, {
      isFetching: true
    });
    case 'ADD_TODO_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
    });
      
    case "ADD_TODO":
      console.log("action.todo");
      console.log(action.todo);
      return {
        todoList: [...state.todoList, action.todo]
      };
    case 'FETCH_TODOS':
    return Object.assign({}, state, {
      isFetching: true
    });
    case 'FETCH_TODOS_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
      todoList: [...action.todos]
    });
    default:
      return state;
  }
};
