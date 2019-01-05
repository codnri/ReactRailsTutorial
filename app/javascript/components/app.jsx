import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { TodoReducer } from "./TodoReducer";
import TodoInput from "./TodoInput";
import { TodoList } from "./TodoList";
import $ from "jquery";
import './app.css';


// import "./styles.css";




const App = () => {
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="mx-auto text-center" style={{width: "500px"}}>
          <h1>Todo App</h1>
          <h2>What are you going to do today?</h2>
        </div>
        <br/>
        <Provider store={store}>
          <TodoInput />
        
        </Provider>
      </div>
    </div>
  );
};

const store = createStore(
  combineReducers({
    todo: TodoReducer
  }),
  applyMiddleware(thunkMiddleware)
);

// const rootElement = document.getElementById("example-app");
// ReactDOM.render(<App />, rootElement);

export default App;
