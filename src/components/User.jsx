import { useSelector, useDispatch } from 'react-redux'
import { delete_todo,update_todo, getTodo } from '../redux/modules/todoSlice'
// import { NavLink } from "react-router-dom";
//import { Link } from 'react-router-dom'; 

const User = ({ type, title }) => {
  const todoLists = useSelector(getTodo)
  // const todoLists = useSelector(store => store.todoReducer);
  const dispath = useDispatch()
  const removeFunction = (id) => {
    dispath(delete_todo(id))
    // setState(state.filter(item => item.id !== id))
  };

  const DoneFunction = (id) => {
    dispath(update_todo(id))
    // setState(state.map(item => {
    //   if(item.id === id) {
    //     return {...item,isDone: !item.isDone}
    //   } else {
    //     return item 
    //   }
    // }))
  };

  return (<>  
    <h3>{title}</h3>
    <div className='app-style'>  
      {todoLists.map(todo => todo.isDone === type && (
      <div key={todo.id} className='component-style'>
          {/* <NavLink to={`/${todo.id}`}>상세페이지</NavLink> */}
      {todo.title} : {todo.content}
     
      <button className = "delete-Button" onClick={() => removeFunction(todo.id)}>삭제하기</button>
      <button className = "done-Button" onClick={() => DoneFunction(todo.id)}>{type ? "취소" : "완료"}</button>
  
     {/* <Link to={`/detail/${todo.id}`}>상세보기</Link> */}
  </div>
  ))}  
  </div>
  </>)
}

export default User;

/*
  /// 일반함수 
  if (todo.isDone === type) {
    retrun <div>...</div>
  } else {
    return null
  }

  /// 삼항 조건부 연산자
  todo.isDone === type 
    ? <div>...</div>
    : null 

  /// 논리 연산자 
  todo.isDone === type && <div>...</div>
*/



//반복되는 부분을 하나의 컴포넌트로서 관리하면 좋겠다.
// 하나의 users로 관리! 자식 컴포넌트로 user만들기.
// 자식 컴포넌트 User
// const User = ({item, removeFunction})=>{ //구조 분해 할당으로 가져옴.(???)

/*
    const initialState = [
      { id: 0, age: '리액트', name: 'props 복습하기', isDone: false },
      { id: 1, age: '리액트', name: 'props 복습하기', isDone: false },
      { id: 3, age: '리액트', name: 'props 복습하기', isDone: true },
    ];


    props >> item >> isDone : false 이든 true
    소희님 코드
    - working
    if (false) >> .... 반환해주고
    else (true) >> ..... 반환을 했더거에요. 

    - done    
    if (false) >> .... 반환해주고
    else (true) >> ..... 반환을 했더거에요. 

    - 정답코드
    working >> (false) >> .... 반환해주고  // else null 리턴안해!!!!!!!!
    done >> (true) >> ..... 반환을 했더거에요  // else null 리턴안해!!!!!!!!

*/