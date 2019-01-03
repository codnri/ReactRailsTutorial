import React from 'react';
import Header from './header';
import TodoForm from './todo-form';
import TodoTable from './todo-table';

class App extends React.Component {
  constructor(props) {
    super(props);

    // タスク一覧を格納する配列を state として初期化
    this.state = {
      todos: [],
    }

    // タスクを取得するメソッドを this に bind
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    // コンポーネントマウント時にタスク一覧を取得する
    this.getTodos()
  }

  getTodos() {
    // Rails 側の /api/v1/todos に GET リクエストを送ってタスク一覧を取得
    let request = new Request('/api/v1/todos', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then(function (todos) {
      // 取得が完了したら state にセットする
      this.setState({
        todos: todos
      });
    }.bind(this)).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Header title='Rails 5.1 + webpacker + React + Reactstrap Example' />
        <div>
          {/*
            * TodoForm コンポーネント起因でタスクを作成した際に
            * タスク一覧を再取得するために
            * getTodos メソッドを props として渡す
            */}
          <TodoForm getTodos={this.getTodos} />
          {/*
            * TodoRow (TodoTable の中) コンポーネント起因でタスクを削除した際に
            * タスク一覧を再取得するために
            * getTodos メソッドを props として渡す
            * todos はタスク一覧
            */}
          <TodoTable todos={todos} getTodos={this.getTodos} />
        </div>
      </div>
    )
  }
}

export default App;