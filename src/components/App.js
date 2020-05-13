import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar"
import NewsList from "../components/NewsList"

const API = "https://api.hnpwa.com/v0/news/1.json";

export default function App(props) {

  const toFilterNews = newFilterText => {
    props.changeText(newFilterText);
  };

  const regExp = () => {
    const regex= /^[a-zA-Z0-9][a-zA-Z0-9-_\ \.]*[a-zA-Z0-9]$/;
    return regex.test(props.filterText);
  }

  const loadData = async () => {
    const response = await fetch(API);
    const responseJson = await response.json();
    props.makeNews(responseJson);
  };

  const onBtnClickHandler = () => {

    if(props.filterText.length>=3 && props.filterText.length<=50){
      
      if (regExp()){

        if(props.filterText.includes('.-') || props.filterText.includes('-.')){
          document.getElementById("error-message").style.color = 'red';
          props.errorMessage('Your text wasn\'t accepted. \n You may not have any non-alphanumeric characters twice in a row, such as a dash and a period side by side.');
        }
        else{
          document.getElementById("error-message").style.color = 'green';
          const filteredData = props.news.filter(newItem => { return newItem.title.toLowerCase().includes(props.filterText.toLowerCase())});
          props.makeNews(filteredData);
          props.errorMessage('Your text was accepted.'); 
        }
      }
      else{
        document.getElementById("error-message").style.color = 'red';
        props.errorMessage('Your text wasn\'t accepted. \n Requirements for input: Alphanumeric, dash, period, and underscore input only. Input must start and end with an alphanumeric character.');
      }
    }
    else{
      document.getElementById('error-message').style.color = 'red';
      props.errorMessage('Your text wasn\'t accepted. \n The string must be at least 3 characters long and no more than 50 characters');
    }
    document.getElementById("filter").disabled = true;
  
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <SearchBar toFilterNews={toFilterNews} />
      <button
        id="filter"
        type="button"
        className="input-group-text"
        onClick={onBtnClickHandler}
       >
         <span>filter</span>
       </button>
    <div id="error-message">  {props.errorText} </div>
      <NewsList news={props.news} />
    </div>
  );
}
