import React from 'react';
import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserList from './UserList'
function App() {
  const[user,setUsers]=useState([]);
    useEffect(() => {axios.get ("https://jsonplaceholder.typicode.com/users").then(result=>setUsers(result.data)).catch(er=>console.log(er)) }, []);
    
  
  return (
    <div className="App">
    <UserList user={user}/>
</div>
);
}
export default App;
