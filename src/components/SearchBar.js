import React, { useState } from "react";

export default function SearchBar({ toFilterNews }) {
    const [inputState, setInput] = useState("");
 
   const onFilterTextChange = e => {
      toFilterNews(e.target.value);
      setInput(e.target.value );
   };
 
   const onBtnClickHandler = () => {
      toFilterNews("");
      setInput("");
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
 
       <button
         type="button"
         className="input-group-text"
          onClick={onBtnClickHandler}
       >
         <span>filter</span>
       </button>
     </React.Fragment>
   );
 }
 