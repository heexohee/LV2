// 2단계를 >>> 1단계로 
// import { combineReducers, legacy_createStore } from 'redux'
import {configureStore } from '@reduxjs/toolkit'
import todoReducer from '../modules/todoReducer'
import todoSlice from '../modules/todoSlice'


// 튤킷
const store = configureStore({reducer : {todoReducer, todoSlice}})
export default store

// 바닐라 Redux
// const rootReducer = combineReducers(
//     {todoReducer:todoReducer}
// )
// const store2 = legacy_createStore(rootReducer)



/*
    11번줄 {todoReducer, counterReducser} => 8번줄 {todoReducer, counterReducser}  // 책장
    11번줄 combineReducers({ }) => 8번줄 {reducer : { }} // 책장 묶어서
    12번줄 createStore => 8번줄 configureStore // 도서관만을 만들었죠 
*/


/* 
  yarn add redux react-redux
  - redux : redux 자체(리액트에서 상태관리를 위해서 도입된 서드파티)를 
  - react-redux : 리덕스(리액트에서 상태관리를 위해서 도입된 서드파티)를 리액트에서 쉽게 사용하도록 하기 위해서(react-redux) 서드파티 라이브러리 

  2단계
  1) modules 에 있는 Reducer 들을 하나로 묶어줍니다. { combineReducers } // 가상 네임 태그 
      rootReducer(여러개의 책장을 하나의 묶음// 다른폴더에서 만들었기에, 가져와야죠 import ) >> createStore(하나의 도서관이 되겠죠) >> 회원증 index.js <Provider> 
      modules 에 있는 Reducer 등록 // ES6 키와 값이 같을 때 

  2) 하나의 store 에 합쳐진 combineReducers 연결시켜줌
*/

/*
    createStore : 취소선이 있어야, 리액트에서 쓰지말라고 경고하는 것 
    legacy_createStore : 굳이 쓰고 싶니? 이거 써, 근데 튤킷 써줄래??? 
    
    yarn add @reduxjs/toolkit

*/

// redex 리덕스 나와랑 뿅
// import { combineReducers, legacy_createStore } from 'redex'

// // modules 에 있는 Reducer 들 
// import { todoReducer } from '../modules/todoReducer'
// import { counterReducser} from '../modules/counterReducser'

// const rootReducer = combineReducers({todoReducer,counterReducser})

// const store = legacy_createStore(rootReducer)

// export default store