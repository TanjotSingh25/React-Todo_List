
export default function Task({TaskName, Category, key}) {
    console.log(TaskName)
    return(
        <div>
            <input type="checkbox" id={key} />
            <label for={key}> {TaskName} </label>
        </div>
    )
}