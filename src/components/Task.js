import { useState, useEffect } from "react";

export default function Task({ TaskName, Category, Key, setTasks }) {
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

  function handleCheck(Task) {
    setTasks((CurrentTasks) => {
      const UpdatedTasks = CurrentTasks.map((TaskObj) => {
        if (TaskObj.task === Task.TaskName) {
          return {
            ...TaskObj,
            category:
              TaskObj.category === "Complete" ? "Incomplete" : "Complete",
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
          type="checkbox"
          id={`check${Key + 1}`}
          className="checkbox-flip"
          checked={Category === "Complete"}
        />
        <label className="CheckboxLabel" htmlFor={`check${Key + 1}`}>
          <span onClick={() => handleCheck({ TaskName })}></span>
          <p class={Category === "Complete" ? "CompleteText" : ""}>
            {TaskName}
          </p>
        </label>
      </div>
      <div className="EditButtons">
        <div className="EditBtnDiv" onClick={() => handleDelete({ TaskName })}>
          <img src="images/trashcan.png" width={20} />
        </div>
        <div className="EditBtnDiv">
          <img src="images/pencil.png" width={20} />
        </div>
      </div>
    </div>
  );
}
