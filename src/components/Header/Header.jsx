import React from "react";
import "./Header.css";
import TaskCounter from "../TaskCounter/TaskCounter";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="page_heading">Список дел</h1>
      <TaskCounter {...props} />
    </header>
  );
};

export default Header;
