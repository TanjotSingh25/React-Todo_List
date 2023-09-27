import { useState } from 'react';
import Task from './Task';

export default function Tasks() {
    const [Tasks, setTasks] = useState([
                                        {
                                            task:'Work',
                                            category:'Incomplete'
                                        }
    ]);

    const TasksComponent = Tasks.map((taskClass, index) => {
        return (<Task key={index} TaskName={taskClass.task} Category={taskClass.category} />)
    })

    console.log(TasksComponent)

    return (
        <div className="TasksBodyDiv">
            {Tasks.length === 0 ? <p className='NoTodos'>No Todos</p> : TasksComponent}
        </div>
    )
}