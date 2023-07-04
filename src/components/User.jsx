const User = ({ type, item, removeFunction, DoneFunction }) => {
  if (item.isDone === type) {  // type에 따라서, type false 면 false, true 면 true 
    return (
      <div key={item.id} className='component-style'>
        {item.age} : {item.name}
        <button className = "delete-Button" onClick={() => removeFunction(item.id)}>삭제하기</button>
        <button className = "done-Button" onClick={() => DoneFunction(item.id)}>{type ? "취소" : "완료"}</button>
      </div>
    );
  } else {
    return null
  }
};

export default User;


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