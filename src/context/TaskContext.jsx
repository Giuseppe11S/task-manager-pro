import { createContext, useState } from "react";

export const TaskContext = createContext(null)

export default function TaskProvider({ children }){

    // useState for user input
    const [dataTask, setDataTask] = useState({
    title: '',
    description: '',
    flagship:'' ,
    deadline: '',
   })

   // tasks saved
   const [tasks, setTasks] = useState([])

   return (
    <>
    <TaskContext.Provider
      value={{dataTask, setDataTask, tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
     
    </>
   )

}