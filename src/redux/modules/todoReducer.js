// 4단계 
// 리덕스 정해진게 없어요. 자유분방 // 개발자마다 코드가 너무 다른거에요. 
// Duck Pattern 국률....11번줄

/*
  바닐라 Redux
  01 Action Key : 휴먼에러 
  02 Action Create : state 변경시킬 dispatch.action의 메소드의 호출을 만들어줘요. >> 함수호출부를 "미리" 만들어준다. >> 가져다쓸수있게  // 반환문은 빠진 것 
  03 initial State : 초기값
  04 Reducer : dispatch.action의 호출결과로 실행될 로직을 기록합니다. >> 함수만들기 // 반환문은 여기 

  튤킷 4단계를 그냥 2단계
  01 initial State 
  02 Slice : Action Key + Action Create + Reducer
*/

// Action Key >> Duck Pattern에서 여러 곳에서 사용되기에, 변수에 담아서 쉽게 관리하고자 함
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Create // 값을 받아온다 payload // 매개변수 // add_todo(newTodo) // newTodo 인자 >> 매개변수 
export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
}

// 값을 받아온다 payload // 삭제할 todo.id // delete_todo(todo.id)
export const delete_todo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  }
}

// 값을 받아온다 payload // 변경할 todo.id // update_todo(todo.id)
export const update_todo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload
  }
}

// initial State
const initialState = [
  {
    id: 0, // 현재 - 1970.01.01 : ms // ms 당 고유한 숫자가 나와요. // 10만명.... 중복된 ID가 존재할 수도... 우리 프리젝트에서는 그럴일이 없어요. 
    title: "리액트(1)",
    content: "참 쉽죵",
    isDone: false
  },
  {
    id: 1, // 현재 - 1970.01.01 : ms // ms 당 고유한 숫자가 나와요. // 10만명.... 중복된 ID가 존재할 수도... 우리 프리젝트에서는 그럴일이 없어요. 
    title: "리액트(2)",
    content: "참 쉽죵",
    isDone: false
  },
  {
    id:2, // 현재 - 1970.01.01 : ms // ms 당 고유한 숫자가 나와요. // 10만명.... 중복된 ID가 존재할 수도... 우리 프리젝트에서는 그럴일이 없어요. 
    title: "리액트(2)",
    content: "참 쉽죵",
    isDone: false
  }
]

//Reducer // ES6 state=initialState 함수 매개변수의 초기값을 설정해 줄 수 있으니까 !! 
const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return [...state, action.payload]
    case DELETE_TODO :
      return [...state.filter(todo => todo.id !== action.payload)]
    case UPDATE_TODO :
      console.log(action.payload);
      return state.map(todo => 
        todo.id === action.payload 
        ? {...todo, isDone: !todo.isDone} 
        : todo
      ) 
    default:
      return state       
  }
}

export default todoReducer;
export const getTodo = (store => store.todoReducer);