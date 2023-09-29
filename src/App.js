import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [Status, setStatus] = useState("All");
  const [AddTaskFlag, setAddTaskFlag] = useState(false);

  return (
    <div className="App">
      <Title />
      <Buttons
        Status={Status}
        setStatus={setStatus}
        setAddTaskFlag={setAddTaskFlag}
      />
      <Tasks Status={Status} />
      <AddTask AddTaskFlag={AddTaskFlag} setAddTaskFlag={setAddTaskFlag} />
    </div>
  );
}

export default App;
