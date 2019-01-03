import React from 'react';

class TodoRow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(id) {
    // Rails 側の /api/v1/todos/{todoID} を DELETE メソッドで叩き、Todo の削除を実行する
    let request = new Request(`/api/v1/todos/${this.props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    fetch(request).then(function (response) {
      return response;
    }).then(() => {
      // DELETE 完了後に再度タスク一覧を取得
      this.props.getTodos();
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.subject}</td>
        <td>{this.props.description}</td>
        <td>
          <a href="javascript:void(0);" onClick={() => this.deleteTodo(this.props.id)}>Delete</a>
        </td>
      </tr>
    )
  }
}

export default TodoRow;