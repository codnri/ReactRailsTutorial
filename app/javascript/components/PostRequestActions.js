import {fetchTodos} from './GetRequestActions'
import axios from 'axios'

function addNewTodo() {
    return {
      type: 'ADD_NEW_TODO',
    };
  }
  function addNewTodoSuccess() {
    return {
      type: 'ADD_TODO_SUCCESS',
    };
  }
  // メッセージ送信
  export function postTodo(todoBody) {
    let sendBody = {"subject":todoBody.subject,"description":todoBody.description,"is_completed":todoBody.is_completed}
    console.log("sendBody")
    console.log(sendBody)
    return dispatch => {
      dispatch(addNewTodo())
      return axios.post('api/v1/todos',
        {
          todo: {...sendBody}
        }//,{withCredentials:false}
      ).then((response) => {
          dispatch(fetchTodos())
          dispatch(addNewTodoSuccess())
        }).catch((response) => {
          console.log(response)
        })
    }
  }