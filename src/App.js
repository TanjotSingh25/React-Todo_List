import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [Status, setStatus] = useState("All");
  const [AddTaskFlag, setAddTaskFlag] = useState(false);
  const [AllTasks, setAllTasks] = useState([]);

  const [TitleValue, setTitleValue] = useState("");
  const [StatusValue, setStatusValue] = useState("Incomplete");

  return (
    <div className="App">
      <Title />
      <Buttons
        Status={Status}
        setStatus={setStatus}
        setAddTaskFlag={setAddTaskFlag}
      />
      <Tasks
        Status={Status}
        Tasks={AllTasks}
        setTasks={setAllTasks}
        setAddTaskFlag={setAddTaskFlag}
        setTitleValue={setTitleValue}
        setStatusValue={setStatusValue}
      />
      <AddTask
        AddTaskFlag={AddTaskFlag}
        setAddTaskFlag={setAddTaskFlag}
        setTasks={setAllTasks}
        Title={TitleValue}
        setTitle={setTitleValue}
        Status={StatusValue}
        setStatus={setStatusValue}
      />
    </div>
  );
}

export default App;
