import { useState } from "react";
import Task from "./Task";

export default function Tasks({ Status }) {
  const [Tasks, setTasks] = useState([
    {
      task: "HTML",
      status: "Complete",
    },
    {
      task: "React",
      status: "Incomplete",
    },
  ]);

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
