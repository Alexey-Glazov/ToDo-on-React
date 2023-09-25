import React from "react";
import ToDoList from "../ToDoList/ToDoList";
import "./Main.css";

const Main = (props) => {
  return (
    <main>
      <ToDoList {...props} /> {/* передача пропсов через компонент  */}
    </main>
  );
};

export default Main;
