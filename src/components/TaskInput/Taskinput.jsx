import React, { useRef, useState } from "react";
import "./TaskInput.css";

const TaskInput = (props) => {
  //console.log(props);
  const formRef = useRef();
  const dateRef = useRef();
  const taskRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      taskText: taskRef.current.value,
      date: dateRef.current.value,
    };

    if (!task.taskText || !task.date) {
      return;
    }

    props.addTask(task);
    formRef.current.reset();
  };

  return (
    <form className="input_task" onSubmit={handleSubmit} ref={formRef}>
      <h3 className="form_header">Введите задачу</h3>
      <input className="date input" type="date" ref={dateRef} />
      <input
        className="task_text input"
        type="text"
        placeholder="текст задачи"
        ref={taskRef}
      />
      <button className="submit" type="submit">
        <p>Сохранить</p>
      </button>
    </form>
  );
};

export default TaskInput;
