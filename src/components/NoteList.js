import React from 'react'
import { useState } from 'react';

import {useSelector} from 'react-redux'
import Card from './Card';

function NoteList() {
    const {notes} = useSelector((state) => {
        return  state  });

 // the value of the search field 
 const [name, setName] = useState('');

 // the search result
 const [foundUsers, setFoundUsers] = useState(notes);

 const filter = (e) => {
   const keyword = e.target.value;

   if (keyword !== '') {
     const results = notes.filter((user) => {
       return user.name.toLowerCase().startsWith(keyword.toLowerCase());
       // Use the toLowerCase() method to make it case-insensitive
     });
     setFoundUsers(results);
   } else {
     setFoundUsers(notes);
     // If the text field is empty, show all users
   }

   setName(keyword);
 };

 return (
   <div className="container">
     <input
       type="search"
       value={name}
       onChange={filter}
       className="input"
       placeholder="Filter"
     />

     <div className="user-list">
       {foundUsers && foundUsers.length > 0 ? (
         notes.map((user) => (
           <div key={user.id} className="user">
           <Card note={user} index={user.id} />
           </div>
         ))
       ) : (
         <h1>No results found!</h1>
       )}
     </div>
   </div>
 );
}

export default NoteList