import React from "react";

export default function NewsRow({ newitem }) {
    return (
      <li
        key={newitem.id}
        className="list-group-item"
      >
        <span>{newitem.title} </span>
      </li>
    );
  }