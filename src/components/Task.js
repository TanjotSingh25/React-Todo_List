import { useState, useEffect } from "react";

export default function Task({
  TaskName,
  Status,
  Key,
  setTasks,
  setAddTaskFlag,
  setStatusValue,
  setTitleValue,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  });

  function handleDelete(Task) {
    setTasks((CurrentTasks) => {
      return CurrentTasks.filter((TaskObj) => TaskObj.task !== Task.TaskName);
    });
  }

  function handleEdit(Task, ItemStatus) {
    console.log(ItemStatus, Task);
    setStatusValue(ItemStatus.Status);
    setTitleValue(Task.TaskName);
    setAddTaskFlag((prev) => !prev);
  }

  function handleCheck(Task) {
    setTasks((CurrentTasks) => {
      const UpdatedTasks = CurrentTasks.map((TaskObj) => {
        if (TaskObj.task === Task.TaskName) {
          return {
            ...TaskObj,
            status: TaskObj.status === "Complete" ? "Incomplete" : "Complete",
          };
        }
        return TaskObj;
      });
      return UpdatedTasks;
    });
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
