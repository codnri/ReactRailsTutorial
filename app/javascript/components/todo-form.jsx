import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    // 入力フォーム(input) 用の state をセットしておく
    this.state = {
      subject: '',
      description: ''
    }

    //　タスクを作成するメソッドを this に bind する
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(event) {
    // Rails 側の /api/v1/todos を POST メソッドで叩き、タスクを作成する
    let request = new Request('/api/v1/todos', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        subject: this.state.subject,
        description: this.state.description
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then((todo) => {
      // タスク作成が成功したら、タスク一覧を再取得する
      this.props.getTodos();
    }).catch(function (error) {
      console.error(error);
    }).finally(() => {
      this.setState({
        subject: '',
        description: ''
      })
    });

    // preventDefault でブラウザ起因の onSubmit イベントを打ち消す
    // この記述が無いとページが遷移してしまう
    event.preventDefault();
  }

  render() {
    let { subject, description } = this.state;

    return (
      <form onSubmit={this.createTodo}>
        <label>Subject</label>
        <input
          type="text" value={subject}
          placeholder="Subject"
          onChange={(e) => {
            this.setState({
              subject: e.target.value
            })
          }}
        />
        <label className="mr-sm-2">Description</label>
        <input
          type="text" value={description}
          placeholder="Description"
          onChange={(e) => {
            this.setState({
              description: e.target.value
            })
          }}
        />
        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

export default TodoForm;