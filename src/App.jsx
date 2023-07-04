import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import User from './components/User';

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

const initialState = [
  { id: 0, age: '리액트', name: 'props 복습하기', isDone: false },
];

const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const TOGGLE_DONE = 'TOGGLE_DONE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.payload);
    case TOGGLE_DONE:
      return state.map((user) => {
        if (user.id === action.payload) {
          return { ...user, isDone: !user.isDone };
        }
        return user;
      });
    default:
      return state;
  }
};

const App = () => {
  const [users, dispatch] = React.useReducer(reducer, initialState);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
      isDone: false,
    };
    dispatch({ type: ADD_USER, payload: newUser });
    setName('');
    setAge('');
  };

  const clickRemoveButtonHandler = (id) => {
    dispatch({ type: REMOVE_USER, payload: id });
  };

  const clickDoneButtonHandler = (id) => {
    dispatch({ type: TOGGLE_DONE, payload: id });
  };

  console.log(users);

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
<h3>working</h3>
      <div className='app-style'>
        
        {users.map((item) => (
          <User
          
            key={item.id}
            item={item}
            removeFunction={clickRemoveButtonHandler}
            DoneFunction={clickDoneButtonHandler}
          />
        ))}
      </div>
      <h3>done</h3>
    </AppContainer>
  );
};

export default App;
