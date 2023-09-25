import React from "react";
import "./TaskCounter.css";

const TaskCounter = ({ taskData }) => {
  return (
    <div className="counters">
      <p className="counter total">всего задач: {taskData.counter}</p>
      <p className="counter created">не начато: {taskData.backlogs}</p>
      <p className="counter done">выполненные: {taskData.doneTasks}</p>
      <p className="counter in_progress">в работе: {taskData.inprogress}</p>
    </div>
  );
};

export default TaskCounter;
