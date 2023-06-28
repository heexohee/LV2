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

  


  return (
    
    <div>
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
