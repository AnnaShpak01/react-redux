import React from "react";
import NewsRow from "../components/NewsRow"

export default function NewsList({ news }) {
    const renderNews = news => {
      return (
        news &&
        news.map(newitem => (
          <NewsRow
            newitem={newitem}
            key={newitem.title}
          />
        ))
      );
    };
  
    return (
      <div>
        <h4>News</h4>
        <ul className="list-group">{renderNews(news)}</ul>
      </div>
    );
  }