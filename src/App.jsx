import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([
    { id: 0, age: '', name: '', isDone: false },
  ]);

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
    setUsers([...users, newUser]);
    setName('');
    setAge('');
  };

  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const clickDoneButtonHandler = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, isDone: !user.isDone };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  console.log(users);

  // .add-form {
  //   background-color: #eee;
  //   border-radius: 12px;
  //   margin: 0 auto;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 30px;
  //   gap: 20px;
  // }
  
  // .input-group {
  //   display: flex;
  //   align-items: center;
  //   gap: 20px;
  // }
  
  // .form-label {
  //   font-size: 16px;
  // font-weight: 700;
  // }
  
  // .add-input{ 
  //   height: 40px;
  //   width: 240px;
  //   border: none;
  //   border-radius: 12px;
  //   padding: 0 12px;
  // }
  
  







  return (
    <div>
    <div className='add-form'>
      <div className='input-group'>
        <div className='input-container'>
          <span className='.form-label'>제목:</span>
          <input className='add-input' value={name} onChange={nameChangeHandler} />
        </div>
        <div className='input-container'>
          <span className='.form-label'>내용:</span>
          <input className='add-input' value={age} onChange={ageChangeHandler} />
        </div>
        <Button className='add-button' clickAddButtonHandler={clickAddButtonHandler}>추가하기</Button>
        </div>
         
      </div>

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
    </div>
  );
};

export default App;
