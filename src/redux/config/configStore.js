/* 
  yarn add redux react-redux
  - redux : redux 자체(리액트에서 상태관리를 위해서 도입된 서드파티)를 
  - react-redux : 리덕스(리액트에서 상태관리를 위해서 도입된 서드파티)를 리액트에서 쉽게 사용하도록 하기 위해서(react-redux) 서드파티 라이브러리 


  2단계
  1) modules 에 있는 Reducer 들을 하나로 묶어줍니다. { combineReducers } // 가상 네임 태그 
  2) 하나의 store 에 
*/


import { combineReducers } from 'redex'
import { todoReducer } from '../modules/todoReducer'
import { counterReducser} from '../modules/counterReducser'


// rootReducer(여러개의 책장을 하나의 묶음// 다른폴더에서 만들었기에, 가져와야죠 import ) >> createStore(하나의 도서관이 되겠죠) >> 회원증 index.js <Provider> 
// modules 에 있는 Reducer 등록 // ES6 키와 값이 같을 때 
const rootReducer = combineReducers(
  // {
       // 
  //   todoReducer:todoReducer,
  //   counterReducser:counterReducser
  // }
  {
    todoReducer,
    counterReducser
  }
)