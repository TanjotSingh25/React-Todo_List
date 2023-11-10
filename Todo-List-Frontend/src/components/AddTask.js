import { useState } from "react";
import axios from "axios";

export default function AddTask({
  AddTaskFlag,
  setAddTaskFlag,
  setTasks,
  Title,
  setTitle,
  Status,
  setStatus,
  OldValue,
  setOldValue,
}) {
  function ToggleAddTaskFlag() {
    setAddTaskFlag((prevValue) => !prevValue);
  }
  function AddNewTask() {
    if (OldValue !== "") {
      const editTask = async () => {
        const response = await axios.put(
          "/api/todolist/update",
          editRequestBody
        );
        console.log(response);

        const responseGet = await axios.get("/api/todolist/All");

        setTasks(responseGet.data);
      };
      const editRequestBody = {
        oldTask: OldValue,
        newTask: Title,
        newStatus: Status,
      };
      editTask();
    } else {
      const addTask = async () => {
        const response = await axios.post("/api/todolist/addtask", newTask);
        console.log(response);

        const responseGet = await axios.get("/api/todolist/All");

        setTasks(responseGet.data);
      };
      const newTask = {
        task: Title,
        status: Status,
      };
      addTask();
    }

    ToggleAddTaskFlag();
    setTitle("");
    setOldValue("");
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
