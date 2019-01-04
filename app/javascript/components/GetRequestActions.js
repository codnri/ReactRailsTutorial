import axios from 'axios'

function requestTodos() {
  return {
    type: 'FETCH_TODOS'
  }
}

function receiveTodos(json) {
  // console.log("receiveTodos")
  console.log("json" )
  console.log(json )
  let todos = json.map((el)=>( { id:el.id, subject:el.subject, description:el.description, is_completed:el.is_completed } ) )
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos: todos
  }
}

// Get todo

export function fetchTodos() {
  return dispatch => {
    
    dispatch(requestTodos())
    // console.log('ddd')    
    return axios.get('api/v1/todos').then((response) => { //http://10.0.2.15:3000/
      
      dispatch(receiveTodos(response.data))
        
      }).catch((response) => {
        console.log("error during API calling")
        console.log(response)
      })
  }
}