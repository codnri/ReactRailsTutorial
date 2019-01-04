import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { TodoList } from "./TodoList";


const addTodo = todo => {
  let tmp_todo = { ...todo };
  tmp_todo.id = uuid();
  // console.log("addTodo");
  return {
    type: "ADD_TODO",
    todo: tmp_todo
  };
};

export class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        subject: "",
        description: "",
        is_completed: false
      }
    };
  }

  clickResetButton = e => {
    this.props.resetTodo();
  };
  clickAddButton = e => {
    // console.log(this.state);
    console.log(this.props);
    this.props.addTodo(this.state.todo);
  };
  onChangeSubject = e => {
    let tmp_todo = { ...this.state.todo };
    tmp_todo.subject = e.target.value;
    this.setState({ todo: tmp_todo });
  };
  onChangeDescription = e => {
    let tmp_todo = { ...this.state.todo };
    tmp_todo.description = e.target.value;
    this.setState({ todo: tmp_todo });
  };
  render() {
    return (
      <div>
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-xs-2">subject: </label>
            <input
              type="text"
              value={this.state.todo.subject}
              onChange={this.onChangeSubject}
            />
          </div>

          <div className="form-group">
            <label className="control-label col-xs-2">detail:</label>
            <textarea
              type="text"
              value={this.state.todo.description}
              onChange={this.onChangeDescription}
            />
          </div>
        </div>
        <div className="float-right">
          <button
            onClick={this.clickAddButton}
            className="btn btn-primary btn-sm"
          >
            Create
          </button>
        </div>
        <br />
        <br />
        <TodoList todoList={this.props.todoState.todoList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoState: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(fetchTodos())
  return {
    addTodo: todo => dispatch(addTodo(todo))
    // removeTodo: del_id => dispatch(removeTodo(del_id)),
    // updateTodo: update_todo => dispatch(updateTodo(update_todo)),
    // fetchTodos: () => dispatch(fetchTodos()),
    // postTodo: (todo) => dispatch(postTodo(todo))
    // onClickMinus: () => dispatch(actionDecrementAsync()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
