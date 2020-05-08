import React, { useState } from "react";

export default function SearchBar({ toFilterNews }) {
    const [inputState, setInput] = useState("");
 
   const onFilterTextChange = e => {
      toFilterNews(e.target.value);
      setInput(e.target.value );
   };
 
   
 
   return (
     <React.Fragment>
       <h2>Search News</h2>
 
       <input
         type="text"
         className="form-control"
         placeholder="Search Users"
          onChange={onFilterTextChange}
          value={inputState}
       />
 
      
     </React.Fragment>
   );
 }
 