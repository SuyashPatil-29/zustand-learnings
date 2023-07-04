/* eslint-disable react/prop-types */
import { useStore } from "../../store"
import {shallow} from "zustand/shallow" 
import Task from "../Tasks/Task"
import "./Column.css"

export default function Column({ state }){

    const tasks = useStore(store=>store.tasks.filter(task=>task.state===state),
    shallow
    )

    const addTask = useStore(store=>store.addTask)

    return(
        <div className="column">
        <div className="titleWrapper">
            <p>{state}</p>
            <button onClick={()=>addTask("New Added Task", "ONGOING")}>Add</button>
        </div>
            {tasks.map(task=><Task key={task.id} title={task.title}/>)}
        </div>
    )
}