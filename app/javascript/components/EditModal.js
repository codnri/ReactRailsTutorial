import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#example-app");

const EditModal = props => {
  return (
    <Modal
      // className="modal-container"
      isOpen={!!props.selectedTodo}
      contentLabel="shown modal"
      onRequestClose={props.handleClearSelectedTodo}

      // onHide={this.props.handleHideModal}
      // animation={true}
      // bsSize="small"
    >
      <h3>Edit Todo Modal</h3>
      {props.selectedTodo && (
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-xs-2">subject: </label>
            <input
              type="text"
              value={props.selectedTodo.subject}
              //onChange={this.onChangeSubject}
            />
          </div>

          <div className="form-group">
            <label className="control-label col-xs-2">detail:</label>
            <textarea
              value={props.selectedTodo.description}

              //onChange={this.onChangeDescription}
            />
          </div>
        </div>
      )}
      <button
        onClick={props.handleClearSelectedTodo}
        className="btn btn-primary btn-sm"
      >
        Update
      </button>
      <button
        onClick={props.handleClearSelectedTodo}
        className="btn btn-warning btn-sm"
      >
        Cancel
      </button>
    </Modal>
  );
};

export default EditModal;
