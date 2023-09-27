
export default function Buttons() {
    return (
        <div className="ButtonsDiv">
            <button className="AddTaskButton">Add Task</button>
            <select className="CategoryDropdown">
                <option selected>All</option>
                <option>Incomplete</option>
                <option>Completed</option>
            </select>
        </div>
    )
}