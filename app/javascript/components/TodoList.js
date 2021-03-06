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
  
  
  
  clickDeleteLink = e => {
    var result = confirm("Are you sure you want to delete this item?");
    let clicked_index = e.target.parentNode.parentNode.id;
    if (result) {
      //Logic to delete the item
      console.log("del_todo");
      console.log(clicked_index);
      this.props.deleteTodoRequest(clicked_index)
    }
    
    
 
 //   
 
  };
  
  clickEditLink = e => {
    console.log("edit_todo");
    let clicked_index = e.target.parentNode.parentNode.id;
    console.log(this.props);
    let edit_todo = this.props.todoList.find((el)=>{return el.id ==clicked_index } );
    console.log(edit_todo);
    this.setState(() => ({ selectedTodo: edit_todo }));
  };
  clickCheckTodo = e =>{
    let clicked_index = e.target.parentNode.parentNode.id;
    console.log(clicked_index)
    let modified_completed_todo = this.props.todoList.find((el)=>{return el.id ==clicked_index } );
    modified_completed_todo.is_completed = !modified_completed_todo.is_completed
    this.props.updateTodoRequest(modified_completed_todo)

  }
  render() {
    return (
      <div>
        <EditModal
          selectedTodo={this.state.selectedTodo}
          handleClearSelectedTodo={this.handleClearSelectedTodo}
          updateTodoRequest={this.props.updateTodoRequest}

        />

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Done?</th>
              <th scope="col">Subject</th>
              <th scope="col">Detail</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todoList.map((todo, index) => {
              return (
                <tr key={index} id={todo.id}>
                  <th scope="row">
                    {todo.is_completed ? (
                      <i className="far fa-check-square" onClick={this.clickCheckTodo}/>
                    ) : (
                      <i className="far fa-square" onClick={this.clickCheckTodo}/>
                    )}
                  </th>
                  <td>{todo.subject}</td>
                  <td>{todo.description}</td>
                  <td >
                    <a href="javascript:void(0);" onClick={this.clickEditLink}>
                      Edit&nbsp;
                    </a>
                    |&nbsp;
                    <a href="javascript:void(0);" onClick={this.clickDeleteLink}>
                      Del
                    </a>
                     
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
