import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#example-app");

// const EditModal = props => {
export class EditModal extends React.Component {
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
  
  componentWillReceiveProps(props){ 
    // console.log("this.props in componentWillReceiveProps")
    // console.log(props)
    let tmp_todo = props.selectedTodo
    // console.log('tmp_todo')
    // console.log(tmp_todo)
    this.setState({todo:{...props.selectedTodo}})
    

  }
  clickUpdateButton=(e)=>{
    // alert("yo-")
    // console.log("this.props")
    // console.log(this.props)
    // console.log("this.state")
    // console.log(this.state)
    let isBlank=(val)=>{
      return (val == null || val === "");
    }
    if(isBlank(this.state.todo.subject)||isBlank(this.state.todo.description)){//temporary validation
      alert("Subject and Dtail are required")
    }else{
      this.props.updateTodoRequest(this.state.todo)
      this.props.handleClearSelectedTodo()  
    }

    
  }
  
  onChangeSubject = e => {
    let tmp_todo = { ...this.state.todo };
    tmp_todo.subject = e.target.value;
    this.setState({ todo: tmp_todo });
  };
  onChangeDescription=(e)=>{
    let tmp_todo = { ...this.state.todo };
    tmp_todo.description = e.target.value;
    this.setState({ todo: tmp_todo });
  }
  render() {
    return (
      <Modal
        // className="modal-container"
        isOpen={!!this.props.selectedTodo}
        contentLabel="shown modal"
        onRequestClose={this.props.handleClearSelectedTodo}
        className="Modal"
        overlayClassName="Overlay"
        // onHide={this.props.handleHideModal}
        // animation={true}
        // bsSize="small"
      >
        <h3>Edit Todo</h3>
        {this.props.selectedTodo && (
        
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
          
        )}
        <button
          onClick={this.clickUpdateButton}
          className="btn btn-primary btn-sm"
        >
          Update
        </button>
        <button
          onClick={this.props.handleClearSelectedTodo}
          className="btn btn-warning btn-sm"
        >
          Cancel
        </button>
      </Modal>
    );
  }
};

export default EditModal;
