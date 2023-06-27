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

  return (
    <div>
      <div>
        제목: &nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        내용: &nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가하기</Button>
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
