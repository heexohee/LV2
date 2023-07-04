import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import User from './components/User';
import { useDispatch } from 'react-redux'
import { add_todo } from './redux/modules/todoSlice'

  /*
    리액트의 일부 : "상태를 어떻게 관리"할 것인가
    useState(단순자료형의 단순덮어쓰기) //useReducer(복잡한 자료의 여러 개의 함수(dispatch.action))
    useState+useReducer(지역에서) // Redux (전역에서)
    바닐라Redux  >> Toolkit

    01 config : store >>  바닐라Redux 2단계(const 2번) >> Toolkit 1단계(2단계가 들어가 있어요(1번))
    02 모듈 >> 바닐라Redux 4단계(Duck Pattern) >> Toolkit(Slice) 2단계 
    03  바닐라Redux 로컬용 >> 비동기함수처리를 못해요 >> Toolkit 비동기통신까지 되도록 바닐라Redux를 확장시킨 확장팩 >> 미들웨어 : ThunckAPI / Redux-saga(.. saga Functions)
    04 미들웨어를 배우는 이유는? 데이터를 전역에서 관리하는 것이 아니라, 서버에서 불러온다는 거에요. 굳이 전역상태를 만들필요가 없어요. 서버에서 불러오면 되는데... React-query(서버상태를 의존해서, 로컬에 저장소가 필요없어요) // 리덕스를 꼭 써야 하나?? 
    05 전역상태에서 있어서도... 더 간단한처리 > 바닐라Redux 리액트용이 아니에요. 리액트에서도 쓰는거에요. 오래된 전역상태를 위한 라이브러리인거에요. 여러 언어에서 쓴 정통.. 리액트에서도 쓴거에요. >> 리액트팀에서 따로 만들었어요.
    06 물론 React-query는 많이 사용해요. 
    07 그게 리코일이에요... 정말 편해요... 근데 0.7.7 >> 정식 버전이 1이 안되요... 이슈가 개많아요... 스터트업에서 빠른개발을 위해서, 대기압은 안정화 다음에 도입할 거예요
    08 스토리가 더 중요해요. 왜 이 라이브러리를 채택했는지 // 어떤 과정을 통해서 해당 라이브러리를 "선택했는지에 대한 서술이 더 중요해요". 
    09 React-query / Recoil 은 소규모 프로젝트 용이에요 >> 대기업, 대규모 프로젝트는 결국 Redux >> React-query 이제서야 전환 중이에요. 

    어떤건 결정할지는 팀의 의사결정(과정) // 자가주장이 높으면 안되요. // 그 팀이 어떻게 되었느냐 // 개발현장에서 애자일 >> 스크럼 / 스플린턴 // 더 나아가자는 방향 // 각자의 소리 더 중요해요 // 권위적이지 않는 느낌이
     돌아가기만 하면 되니까, 그러나 효율적으로 // 대화가 진짜 중요해요. 
    props 나온 이유 : 컴포넌트를 분리해 때문에 >> 데이터를 공유하기 위한 건데 >> 방향성이 없으면 상태 난잡해질 수 있어요 >> 어디서 고치고 수정하는지 정립이 안되면, 데이터가 꼬일 수 있어요 >> 단방향을 유지 >> 리액트의 기술스택 방식
     상하 관계 > prop drilling >> useConext (ContextAPI) 도입한건데 <Provider /> 
     그럼 좌우관계는 어떻게 > 초월적 상태관리소가 필요하게 되었고 등장한 것이 "전역상태관리소"
     

    디렉토리 
      @ redux
      config  >> configStore.js >> 전역상태관리소 (props 내리지 않고, 어느 컴포넌트에서든 해당 store에 직접 전급해서 값을 사용할 수 있음) : 초월적 저장소 (상하좌우 다 접근가능)
              >> configStore.js 에 modules에 (있는 Reducer를 등록합니다.  >> Toolkit 1단계 
      modules >> 각각의 Reducer를 구성합니다. (todoReducer.js, counterReducer.js)) >> "Reducer(초기값, 초기값을 변경하는 함수들)"들의 묶음, 잘 쓰기 위한 규칙이 Duck Pattern (4단계) >>  Toolkit 2단계
      indesx.js >> <Provider store={store}> 감싸주면
      각각의 컴포넌트에서 그냥 store(state)에서 데이터를 꺼내서 사용하면 되는거에요. // useSelect() 값을 사용 // useDispatch() 값을 변경

    */

    
    // ---
    // 단일 함수, 덮어쓰기만. 단순처리만.


// const initialState = [
//   { id: 0, age: '리액트', name: 'props 복습하기', isDone: false },
//   { id: 1, age: '리액트', name: 'props 복습하기', isDone: false },
//   { id: 3, age: '리액트', name: 'props 복습하기', isDone: false },
// ];


const App = () => {
  // const [state, setState] = useState(initialState);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispath = useDispatch()

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: age,
      content: name,
      isDone: false,
    };
    
    dispath(add_todo(newTodo))
    // setState([...state, newUser])
    setName('');
    setAge('');
  };


  
  return (
    <AppContainer>
      <div className='add-form'>
        <div className='input-group'>
          <div className='input-container'>
            <label className='form-label'>제목:</label>
            <input className='add-input' value={name} onChange={nameChangeHandler} />
          </div>
          <div className='input-container'>
            <label className='form-label'>내용:</label>
            <input className='add-input' value={age} onChange={ageChangeHandler} />
          </div>
          <Button className='add-button' clickAddButtonHandler={clickAddButtonHandler}>
            추가하기
          </Button>
        </div>
      </div>

      {/* working -------- -------- -------- */}
      <User type={false} title="working..."/>
      {/* done -------- -------- -------- */}    
      <User type={true}  title="done..."/>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .input-label {
    font-weight: bold;
    margin-right: 10px;
  }

  .input-field {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 250px;
    height: 22px;
  }

  .button-container {
    margin-top: 20px;
  }

  .delete-Button {
    border: none;
    height: 40px;
    border-radius: 10px;
    border: 2px solid tomato;
    width: 140px;
    color: tomato;
    font-weight: 700;
  }

  .done-Button {
    margin-left: 10px;
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;
  }

  .app-style {
    min-height: 200px;
    padding: 100px;
    display: flex;
    gap: 12px;
  }

  .component-style {
    width: 300px;
    height: 120px;
    border: 4px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .component-style2 {
    width: 300px;
    height: 120px;
    border: 4px solid tomato;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-form {
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
  }

  .input-group {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .form-label {
    font-size: 16px;
    font-weight: 700;
  }

  .add-input {
    height: 40px;
    width: 240px;
    border: 2px solid teal;
    border-radius: 12px;
    padding: 0 12px;
  }

  .add-button {
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;
  }
`;