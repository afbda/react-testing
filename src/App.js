import React, {useEffect, useState} from 'react';
import './App.css';
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [users]);
  function getUsersFromApi(){
    return fetch("https://jsonplaceholder.typicode.com/users");
  }
  function getUsers(){
    getUsersFromApi()
    .then(res => res.json())
    .then(
      (result) => {
        setUsers(result.map((user) =>
          <li key={user.id}>
            {user.name}
          </li>
        ));
      },
      (error) => {
        console.log("Ocorreu um erro");
      }
    )
  }
  return (
    <UserList users={users}></UserList>
    
  );
}

export default App;
