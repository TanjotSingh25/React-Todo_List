import { useState } from "react";
import Task from "./Task";

export default function Tasks({ Category }) {
  const [Tasks, setTasks] = useState([
    {
      task: "HTML",
      category: "Complete",
    },
    {
      task: "React",
      category: "Incomplete",
    },
  ]);

  console.log(Tasks);

  const filteredTasks = Tasks.filter(
    (taskClass) => Category === "All" || taskClass.category === Category
  );

  const TasksComponent = filteredTasks.map((taskClass, index) => (
    <Task
      Key={index}
      TaskName={taskClass.task}
      Category={taskClass.category}
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
