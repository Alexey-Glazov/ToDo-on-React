import React from "react";

const Task = (props) => {
  return (
    <div className="task">
      <h3>{props.taskText}</h3>
      <p>{props.date}</p>
      <button
        className="task_delete"
        onClick={() => props.deleteTask(props.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default Task;
