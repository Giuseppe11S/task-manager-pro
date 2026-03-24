import { TaskContext } from "../context/TaskContext"
import { useContext } from "react";
// HOME PAGE
import TaskForm from "../components/TaskForm"

// import tasks data from context


export default function TaskList(){

  const {tasks, setTasks} = useContext(TaskContext);

  return(
    <>
      <TaskForm/>
      {console.log('Oggetto ricevuto dentro taks', tasks.title)}
    </>
  )
}