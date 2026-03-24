import { useState } from "react"
// form in Home page
import { Calendar } from "@/components/ui/calendar"

export default function TaskForm() {

  const [deadline, SetDeadline] = useState(false)
  const [dataTask, setDataTask] = useState({
    title: '',
    description: '',
    flagship:'' ,
    deadline: '',

  })

  const toggleCalendar = () => (SetDeadline(!deadline))

  // Saving and updating the object from user's input
  const handleSubmit= (e) => {
    const {name, value} = e.target;
    setDataTask({...dataTask, [name]: value})
    console.log({...dataTask, [name]: value})
  }

  // date for deadline
  const handleDate = (date) => {
    setDataTask({...dataTask, deadline: date.toLocaleDateString()})
    console.log(date)
    SetDeadline(false)
  }


  const handleChange = (e) => {
    e.preventDefault()
  } 

  return (
    <>
      <form onSubmit={handleChange} className="flex flex-col items-center">

        {/* to compile the form */}
          <div className="flex flex-col border-gray-200 rounded-xl bg-white/50 mt-[100px] border p-[15px]">
              <input type="text" className="w-[750px] my-[10px]" placeholder="What needs to be done?"
              value={dataTask.title}
              name="title"
              onChange={handleSubmit}/>
              <textarea className="w-[750px] bg-[#f4f5f7] py-[10px] px-[10px] mt-[10px] rounded-xl" 
              placeholder="Add a Description (optional)"
              value={dataTask.description}
              name="description"
              onChange={handleSubmit}/>

        {/* to set date*/}
              <div className="border flex mt-[20px]">
              
              <button className="border text-black-500 mr-[5px]"
              onClick={toggleCalendar}>
                Set deadline
              </button>
        {/*flag ship*/}
              <div className="flex border gap-[10px]">
                    <button type="button" name="flagship" value="low"
                    onClick={handleSubmit}>
                      Low
                    </button>
                    <button type="button" name="flagship" value="medium"
                    onClick={handleSubmit}>
                      Medium
                    </button>
                    <button type="button" name="flagship" value="high"
                    onClick={handleSubmit}>
                      High
                    </button>
              </div>
              <button type="submit" onClick={handleChange}>+ Add Task</button>
          </div>
          {/* Calendar */}
        </div>
        <div className="flex items-start">
          {deadline && <Calendar className="absolute"
          mode="single"
          selected={dataTask.deadline}
          onSelect={handleDate}/>}
        </div> 
      </form>
    </>
  )
}