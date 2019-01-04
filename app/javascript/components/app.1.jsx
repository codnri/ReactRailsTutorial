import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { TodoReducer } from "./TodoReducer";
// import TodoInput from "./TodoInput";
import { TodoList } from "./TodoList";
// import "./styles.css";


class App2 extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render(){
  return (
    <h1>hoge</h1>  
    
    );
  }
}

const App = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <h2>What are you going to do today?</h2>
      <div className="container">
        
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
