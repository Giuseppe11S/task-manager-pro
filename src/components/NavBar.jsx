import { NotebookPen, Moon, User, Sun } from "lucide-react"
// navbar

export default function NavBar({  }){
  return (
    <>
       <nav className="flex justify-around bg-white">
        {/* Logo */}
          <ul className="flex py-[20px] gap-[5px] ">
            <li>
              <NotebookPen
              className="w-[25px]"/>
            </li>
            <li>
              <h1 className="
              font-bold">
                Task Manager
              </h1>
            </li>
          </ul>


          <ul className="flex py-[20px] gap-[15px] ">
            {/* Toggle light and dark */}
            <li>
              <Moon 
              className="w-[20px]"/>
            </li>
            <li>
              <User 
              className="w-[20px]"/>
            </li>
          </ul>
       </nav>
    </>
  )

}