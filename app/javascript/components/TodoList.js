import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import EditModal from "./EditModal";
export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTodo: undefined
    };
  }

  handleClearSelectedTodo = () => {
    this.setState(() => ({ selectedTodo: undefined }));
  };
  clickEditLink = e => {
    console.log("edit_todo");
    let clicked_index = e.target.parentNode.id;
    console.log(clicked_index);
    let edit_todo = this.props.todoList[clicked_index];
    console.log(edit_todo);
    this.setState(() => ({ selectedTodo: edit_todo }));
  };
  render() {
    return (
      <div>
        <EditModal
          selectedTodo={this.state.selectedTodo}
          handleClearSelectedTodo={this.handleClearSelectedTodo}
        />

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Done?</th>
              <th scope="col">Subject</th>
              <th scope="col">Summary</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <i className="far fa-check-square" />
                <i className="far fa-square" />
              </th>
              <td>Go to gym</td>
              <td>2:00.p.m going to the gym on Victoria S...</td>
              <td>Edit | Del</td>
            </tr>
            {this.props.todoList.map((todo, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    {todo.is_completed ? (
                      <i className="far fa-check-square" />
                    ) : (
                      <i className="far fa-square" />
                    )}
                  </th>
                  <td>{todo.subject}</td>
                  <td>{todo.description}</td>
                  <td id={index}>
                    <a href="javascript:void(0);" onClick={this.clickEditLink}>
                      Edit
                    </a>
                    | Del
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
