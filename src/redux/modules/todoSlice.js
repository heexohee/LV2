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

import {createSlice} from '@reduxjs/toolkit'

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

const todoSlice = createSlice({
  name:"todoSlice",
  initialState,
  reducers: {
    add_todo : (state, action) => {
      return [...state, action.payload]
    },
    delete_todo : (state, action) => {
      return [...state.filter(todo => todo.id !== action.payload)]
    },
    update_todo : (state, action) => {
      return state.map(todo => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo) 
    },
  },
  // extraReducers : { 비동기 처리를 하기 위한 객체, 서버에서 받아온 데이터를 전역 상태로 관리할 때 사용하는 객체 }
})

export default todoSlice.reducer; // configStore 
export const getTodo = (store => store.todoSlice);
export const {add_todo, update_todo, delete_todo} = todoSlice.actions; // 컴포넌트 