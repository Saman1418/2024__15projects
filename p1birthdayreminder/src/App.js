import React,{useState} from 'react'
import Display from "./Display"

const App = () => {
  const data = [
    {
      id:1,
      name:"Saman",
      age:24,
    },
    {
      id:2,
      name:"Ritu",
      age:49,
    },
    {
      id:3,
      name:"Sanju",
      age:55,
    },
    {
      id:4,
      name:"uddu",
      age:22,
    },
    {
      id:5,
      name:"rs",
      age:23,
    }
  ]
  const [person, setPerson] = useState(data)
  return (
    <div className="container">
    <h3>{person.length} Birthday Today</h3>
    <Display person={person}></Display>
    <button onClick={()=>{setPerson([])}}>clear all</button>


    </div>
  )
}

export default App
