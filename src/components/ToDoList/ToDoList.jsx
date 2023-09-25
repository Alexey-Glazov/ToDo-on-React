import React, { useCallback, useEffect, useState } from "react";
import TaskInput from "../TaskInput/taskinput";
import Task from "../Task/task";
import "./ToDoList.css";

const ToDoList = ({ handleChange }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => {
      return [task, ...prev];
    });
  };
  const updateTaskStatus = React.useCallback((id, newStatus) => {
    setTasks((prev) => {
      const newValue = [...prev];
      newValue.find((item) => item.id === id).status = newStatus;
      console.log(tasks);
      return newValue;
    });
  }, []);

  const deleteTask = React.useCallback((id) => {
    setTasks((prev) => {
      return prev.filter((item) => item.id != id);
    });
  }, []);

  const getTargetTasksCount = (status) => {
    const targetTasks = tasks.filter((item) => item.status === status);
    return targetTasks.length;
  };

  useEffect(() => {
    handleChange({
      counter: tasks.length,
      backlogs: getTargetTasksCount("created"),
      doneTasks: getTargetTasksCount("done"),
      inprogress: getTargetTasksCount("in_progress"),
    });
  }, [tasks]);

  return (
    <div className='todo_list'>
      <TaskInput addTask={addTask} />
      <div className='task_container'>
        {tasks.map((item) => (
          <Task
            key={item.id}
            taskHead={item.taskHead}
            taskText={item.taskText}
            date={item.date}
            id={item.id}
            deleteTask={deleteTask}
            status={item.status}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
