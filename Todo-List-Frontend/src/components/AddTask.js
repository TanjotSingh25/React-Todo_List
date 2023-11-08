import { useState } from "react";

export default function AddTask({
  AddTaskFlag,
  setAddTaskFlag,
  setTasks,
  Title,
  setTitle,
  Status,
  setStatus,
}) {
  function ToggleAddTaskFlag() {
    setAddTaskFlag((prevValue) => !prevValue);
  }
  function AddNewTask() {
    const newTask = {
      task: Title,
      status: Status,
    };
    setTasks((prev) => {
      const FilteredTasks = prev.filter(
        (TaskObj) => TaskObj.task !== newTask.task
      );
      return [...FilteredTasks, newTask];
    });
    ToggleAddTaskFlag();
    setTitle("");
    setStatus("Incomplete");
  }

  return (
    <div className={`FullPage ${AddTaskFlag ? "appear" : ""}`}>
      <div className={`AddTaskDiv ${AddTaskFlag ? "appear" : ""}`}>
        <h6 className="XText" onClick={ToggleAddTaskFlag}>
          &times;
        </h6>
        <div className="AddTaskForm">
          <h4>Add Task</h4>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            id="Title"
            className="AddTaskInput"
            value={Title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label htmlFor="Status">Status</label>
          <select
            id="Status"
            className="AddTaskInput"
            value={Status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
          <div className="AddTaskBtns">
            <h3 className="AddTaskBtn" onClick={AddNewTask}>
              Add Task
            </h3>
            <h3 className="CancelBtn" onClick={ToggleAddTaskFlag}>
              Cancel
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
