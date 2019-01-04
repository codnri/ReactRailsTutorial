import {fetchTodos} from './GetRequestActions'
import axios from 'axios'

function deleteTodo() {
    return {
      type: 'DELETE_TODO',
    };
  }
  function deleteTodoSuccess() {
    return {
      type: 'DELETE_TODO_SUCCESS',
    };
  }
  // メッセージ送信
  export default function deleteTodoRequest(delete_id) {
    // let delete_id = todoBody.id
    // let sendBody = {"subject":todoBody.subject,"description":todoBody.description,"is_completed":todoBody.is_completed}
    // console.log("sendBody")
    // console.log(sendBody)
    console.log("deleteTodoRequest")
    console.log(delete_id)
    return dispatch => {
      dispatch(deleteTodo())
      
      return axios.delete('api/v1/todos/'+delete_id).then(
        (response) => {
          dispatch(fetchTodos())
          dispatch(deleteTodoSuccess())
        }).catch((response) => {
          console.log(response)
        })
    }
  }