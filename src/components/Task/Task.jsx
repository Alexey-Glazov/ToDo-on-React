import React from "react";
import "./Task.css";
import { render } from "react-dom";

const Task = React.memo(
  ({ taskHead, taskText, date, id, status, updateTaskStatus, deleteTask }) => {
    console.log("render");
    const TaskStatusText = {
      created: "не начато",
      in_progress: "в работе",
      done: "выполнено",
    };

    return (
      <div className={`task ${status} ${`${status}-border`}`}>
        <div className={`task_header ${status}`}>
          <h3 className=''>{taskHead}</h3>
          <p>{date}</p>
        </div>
        <p className={`status_block ${status}-border`}>
          {TaskStatusText[status]}
        </p>
        <p className='taskText'>{taskText}</p>
        <div className='buttons'>
          <button className='button task_delete' onClick={() => deleteTask(id)}>
            Удалить
          </button>
          <button
            className='button status_in_progress'
            onClick={() => updateTaskStatus(id, "in_progress")}
          >
            В работе
          </button>
          <button
            className='button status_done'
            onClick={() => updateTaskStatus(id, "done")}
          >
            Выполнено
          </button>
        </div>
      </div>
    );
  }
);

export default Task;
