import React from "react";
import { connect } from "react-redux";
// import uuid from "uuid";
import { TodoList } from "./TodoList";
import { fetchTodos } from './GetRequestActions';
import { postTodo } from './PostRequestActions';
import  updateTodoRequest  from './UpdateRequestActions';
import  deleteTodoRequest  from './DeleteRequestActions';

const addTodo = todo => {
  let tmp_todo = { ...todo };
  //tmp_todo.id = uuid();
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
        is_completed: false,
        id:""
      }
    };
  }

  componentDidMount() {
    this.props.fetchTodos()
    
  }
  clickResetButton = e => {
    this.props.resetTodo();
  };
  

  clickAddButton = e => {
    
    let isBlank=(val)=>{
      return (val == null || val === "");
    }
    if(isBlank(this.state.todo.subject)||isBlank(this.state.todo.description)){//temporary validation
      alert("Subject and Dtail are required")
    }else{
      this.props.postTodo(this.state.todo)
      this.setState({ todo: {
          subject: "",
          description: "",
          is_completed: false,
          id: ""
        }
      })  
    }
    
    
    

  }
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
      <div className="container">
      
        <div className="row align-center">
          <div className="form-horizontal col-sm-6">
            <div className="form-group row">
              <label  htmlFor="inputsubject" className="col-sm-2 col-form-label">Subject:</label>
              <div class="col-sm-10">
                <input
                  id="inputsubject"
                  type="text"
                  value={this.state.todo.subject}
                  onChange={this.onChangeSubject}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="form-group row">
              <label htmlFor="inputdescription" className="col-sm-2 col-form-label">Detail:</label>
              <div class="col-sm-10">
                <textarea
                  id="inputdescription"
                  type="text"
                  value={this.state.todo.description}
                  onChange={this.onChangeDescription}
                  className="form-control"

                />
              </div>  
            </div>
          </div>
          <div className="botton-area d-flex align-items-end pb-3">
            <button
              onClick={this.clickAddButton}
              className="btn btn-primary btn-lg"
            >
              Create
            </button>
          </div>  
        </div> 
        
        
        <br />
        <TodoList 
          todoList={this.props.todoState.todoList}
          updateTodoRequest={this.props.updateTodoRequest}
          deleteTodoRequest={this.props.deleteTodoRequest}
        />
        
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
    addTodo: todo => dispatch(addTodo(todo)),
    // removeTodo: del_id => dispatch(removeTodo(del_id)),
    // updateTodo: update_todo => dispatch(updateTodo(update_todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    postTodo: (todo) => dispatch(postTodo(todo)),
    updateTodoRequest: (todo) => dispatch(updateTodoRequest(todo)),
    deleteTodoRequest: (todo) => dispatch(deleteTodoRequest(todo)),
    
    // onClickMinus: () => dispatch(actionDecrementAsync()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
