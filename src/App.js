import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [Category, setCategory] = useState("All");

  return (
    <div className="App">
      <Title />
      <Buttons Category={Category} setCategory={setCategory} />
      <Tasks Category={Category} />
    </div>
  );
}

export default App;
