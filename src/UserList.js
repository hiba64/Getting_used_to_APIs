import React from 'react';


function UserList(props){
  return (
      
      <ul>
      {props.user.map((el) => (
      <div className='App'>  <li>
        {el.name}
        </li>
        <li>{el.username}</li>
        </div>
    ))}</ul>
   
       );
}
export default UserList;