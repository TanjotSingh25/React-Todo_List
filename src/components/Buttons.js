import { useState } from "react";

export default function Buttons({ Category, setCategory }) {
  return (
    <div className="ButtonsDiv">
      <button className="AddTaskButton">Add Task</button>
      <select
        value={Category}
        className="CategoryDropdown"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  );
}
