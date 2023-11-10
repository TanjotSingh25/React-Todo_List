import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Status, setStatus] = useState("All");
  const [AddTaskFlag, setAddTaskFlag] = useState(false);
  const [AllTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("/api/todolist/All");
      console.log(response);

      setAllTasks(response.data);
    };
    fetchTasks();
  }, []);

  const [TitleValue, setTitleValue] = useState("");
  const [StatusValue, setStatusValue] = useState("Incomplete");
  const [OldValue, setOldValue] = useState("");

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
        setOldValue={setOldValue}
      />
      <AddTask
        AddTaskFlag={AddTaskFlag}
        setAddTaskFlag={setAddTaskFlag}
        setTasks={setAllTasks}
        Title={TitleValue}
        setTitle={setTitleValue}
        Status={StatusValue}
        setStatus={setStatusValue}
        OldValue={OldValue}
        setOldValue={setOldValue}
      />
    </div>
  );
}

export default App;
