import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("red")
return (
   <div 
    className="w-full h-screen"
    style={{backgroundColor: color}}
  >
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div  className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-5 py-4 rounded-xl text-amber-50 '>
          <button
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >RED</button>

          <button
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}
          
          >YELLOW</button>
          <button
          onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          
          >BLUE</button>
          <button
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          
          >GREEN</button>
          <button
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"orange"}}
          
          >ORANGE</button>
        </div>
       </div>
  </div>
   
  )
}

export default App
