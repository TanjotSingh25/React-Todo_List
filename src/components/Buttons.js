import { useState } from "react";

export default function Buttons({ Status, setStatus, setAddTaskFlag }) {
  function ToggleAddTaskFlag() {
    console.log("yes");
    setAddTaskFlag((prevValue) => !prevValue);
  }

  return (
    <div className="ButtonsDiv">
      <button className="AddTaskButton" onClick={ToggleAddTaskFlag}>
        Add Task
      </button>
      <select
        value={Status}
        className="CategoryDropdown"
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  );
}
