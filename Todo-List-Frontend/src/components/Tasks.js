import { useState } from "react";
import Task from "./Task";

export default function Tasks({
  Status,
  Tasks,
  setTasks,
  setAddTaskFlag,
  setStatusValue,
  setTitleValue,
  setOldValue,
}) {
  const filteredTasks = Tasks.filter(
    (taskClass) => Status === "All" || taskClass.status === Status
  );

  const TasksComponent = filteredTasks.map((taskClass, index) => (
    <Task
      key={index}
      Key={index}
      TaskName={taskClass.task}
      Status={taskClass.status}
      setTasks={setTasks}
      setAddTaskFlag={setAddTaskFlag}
      setTitleValue={setTitleValue}
      setStatusValue={setStatusValue}
      setOldValue={setOldValue}
    />
  ));

  return (
    <div className="TasksBodyDiv">
      {TasksComponent.length === 0 ? (
        <p className="NoTodos">No Todos</p>
      ) : (
        TasksComponent
      )}
    </div>
  );
}
