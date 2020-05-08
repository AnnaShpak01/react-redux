import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar"
import NewsList from "../components/NewsList"


const API = "https://api.hnpwa.com/v0/news/1.json";






export default function App(props) {
//   function todoApp(state, action) {
//     if (typeof state === "undefined") {
//       return initialState;
//     }

//     return state;
//   }

  const toFilterNews = newFilterText => {
    props.changeText(newFilterText);
  };

  const loadData = async () => {
    const response = await fetch(API);
    const responseJson = await response.json();
    props.makeNews(responseJson);
  //  props.changeText("");
  };

  const onBtnClickHandler = () => {
    // toFilterNews("");
    // setInput("");
    const filteredData = props.news.filter(newItem => { return newItem.title.toLowerCase().includes(props.filterText.toLowerCase())});
    props.makeNews(filteredData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <SearchBar toFilterNews={toFilterNews} />
      <button
         type="button"
         className="input-group-text"
          onClick={onBtnClickHandler}
       >
         <span>filter</span>
       </button>
    <div>  {props.filterText} </div>
      <NewsList news={props.news} />
    </div>
  );
}
