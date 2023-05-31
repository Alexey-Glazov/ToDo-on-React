import React, { useCallback, useEffect, useState } from "react";
import TaskInput from "../TaskInput/taskinput";
import Task from "../Task/task";

const ToDoList = (props) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prev) => {
      task.id = crypto.randomUUID();
      return [task, ...prev];
    });
  };
  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };
  return (
    <div className="todo_list">
      <TaskInput addTask={addTask} />
      {tasks.map((item) => (
        <Task
          taskText={item.taskText}
          date={item.date}
          id={item.id}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
