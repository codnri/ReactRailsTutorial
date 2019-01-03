import React from 'react';
import TodoRow from './todo-row'

class TodoTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { todos, getTodos } = this.props;

    // 渡された todos を map で回し、TodoRow コンポーネントとしてまとめてレンダリング
    return (
      <table>
        <thead>
          <tr>
            <th>subject</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map(function (todo, index) {
            return (
              <TodoRow
                key={index}
                id={todo.id}
                subject={todo.subject}
                description={todo.description}
                getTodos={getTodos}
              />);
          }.bind(this))}
        </tbody>
      </table>
    );
  }
}

export default TodoTable;