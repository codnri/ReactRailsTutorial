import {fetchTodos} from './GetRequestActions'
import axios from 'axios'

function updateTodo() {
    return {
      type: 'UPDATE_TODO',
    };
  }
  function updateTodoSuccess() {
    return {
      type: 'UPDATE_TODO_SUCCESS',
    };
  }
  // メッセージ送信
  export default function updateTodoRequest(todoBody) {
    let update_id = todoBody.id
    let sendBody = {"subject":todoBody.subject,"description":todoBody.description,"is_completed":todoBody.is_completed}
    console.log("sendBody")
    console.log(sendBody)
    return dispatch => {
      dispatch(updateTodo())
      
      let config = {
        headers: {
        'X-HTTP-Method-Override': 'PUT'
        }
      }
      return axios.post('api/v1/todos/'+update_id,
        {
          todo: {...sendBody}
        }, config //,{withCredentials:false}
      ).then((response) => {
          dispatch(fetchTodos())
          dispatch(updateTodoSuccess())
        }).catch((response) => {
          console.log(response)
        })
    }
  }