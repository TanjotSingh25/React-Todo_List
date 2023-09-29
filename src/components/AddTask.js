export default function AddTask({ AddTaskFlag, setAddTaskFlag }) {
  function ToggleAddTaskFlag() {
    console.log("yes");
    setAddTaskFlag((prevValue) => !prevValue);
  }
  return (
    <div className={`FullPage ${AddTaskFlag ? "appear" : ""}`}>
      <div className={`AddTaskDiv ${AddTaskFlag ? "appear" : "disappear"}`}>
        <h6 className="XText" onClick={ToggleAddTaskFlag}>
          &times;
        </h6>
        <div className="AddTaskForm">
          <h4>Add Task</h4>
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" className="AddTaskInput" />
          <label>Status</label>
          <input type="text" id="Status" className="AddTaskInput" />
          <div className="AddTaskBtns">
            <h3 className="AddTaskBtn">Add Task</h3>
            <h3 className="CancelBtn">Cancel</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
