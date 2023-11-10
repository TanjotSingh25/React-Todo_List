import { useState, useEffect } from "react";
import axios from "axios";

export default function Task({
  TaskName,
  Status,
  Key,
  setTasks,
  setAddTaskFlag,
  setStatusValue,
  setTitleValue,
  setOldValue,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  });

  function handleDelete(Task) {
    const deleteTask = async () => {
      const response = await axios.delete(
        `/api/todolist/delete/${Task.TaskName}`
      );
      console.log(response);

      const responseGet = await axios.get("/api/todolist/All");

      setTasks(responseGet.data);
    };
    deleteTask();
  }

  function handleEdit(Task, ItemStatus) {
    console.log(ItemStatus, Task);
    setStatusValue(ItemStatus.Status);
    setTitleValue(Task.TaskName);
    setOldValue(Task.TaskName);
    setAddTaskFlag((prev) => !prev);
  }

  function handleCheck(Task) {
    const editTask = async () => {
      const response = await axios.put("/api/todolist/update", editRequestBody);
      console.log(response);

      const responseGet = await axios.get("/api/todolist/All");

      setTasks(responseGet.data);
    };
    const editRequestBody = {
      oldTask: TaskName,
      newTask: TaskName,
      newStatus: Status === "Complete" ? "Incomplete" : "Complete",
    };
    editTask();
  }

  return (
    <div className={`TaskBox ${isVisible ? "appear" : ""}`}>
      <div className="checkbox">
        <input
          readOnly
          type="checkbox"
          id={`check${Key + 1}`}
          className="checkbox-flip"
          checked={Status === "Complete"}
        />
        <label className="CheckboxLabel" htmlFor={`check${Key + 1}`}>
          <span onClick={() => handleCheck({ TaskName })}></span>
          <p className={Status === "Complete" ? "CompleteText" : ""}>
            {TaskName}
          </p>
        </label>
      </div>
      <div className="EditButtons">
        <div className="EditBtnDiv" onClick={() => handleDelete({ TaskName })}>
          <img src="images/trashcan.png" width={20} />
        </div>
        <div
          className="EditBtnDiv"
          onClick={() => handleEdit({ TaskName }, { Status })}
        >
          <img src="images/pencil.png" width={20} />
        </div>
      </div>
    </div>
  );
}
