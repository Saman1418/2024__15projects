// import React,{useState} from 'react'
// // toggle-------------------------------------------------------------------------------------------------
// const App = () => {
//   const [Change, setChange] = useState("Saman")
//   const change = ()=>{
//     (Change==="Saman")?setChange("saman aggarwal"):setChange("Saman")
//   }
//   return (
//     <div>
//       <h1>{Change}</h1>
//       <button onClick={change}>Click ME!!</button>
//     </div>
//   )
// }
//saman
// import { useEffect } from "react";

// export default App;

// array-----------------------------------------------------------------------------------------------------

// import React,{useState} from 'react'

// const App = () => {
//   const myData = [{
//     id:0, name:"saman",class:"ec",rollno:20
//   },
//   {
//     id:1,name:"ritu",class:"cs",rollno:21
//   },
//   {
//     id:2,name:"sanju",class:"me",rollno:17
//   },
// ]
// const [Array, setArray] = useState(myData)
// const Click = ()=>{
//   setArray([])


// }
// const Remove = (id)=>{
//   const myArray = Array.filter((element)=>{
//     return element.id !== id

//   })
//   setArray(myArray)
// }
//   return (
//     <div> 
//       {
//         Array.map((element)=>{
//           return (
//             <>
//             <p key={element.id}>name={element.name} class={element.class} rollno={element.rollno} <button onClick={()=>Remove(element.id)}>Remove!!</button></p>


//             </>
//           )
//         })
//       }
//       <button onClick={Click}>Click Me!!</button>
//     </div>
//   )
// }

// export default App;


// object-----------------------------------------------------------------------------------------------------
// import React,{useState} from 'react'

// const App = () => {
//   const [Data, setData] = useState({
//     name:"saman",class:"ec",rollno:20,level:"high"
//   })
//   const Click = ()=>{
//     setData({...Data ,name:"ritu",level:"low"})
//   }
//   return (
//     <div>
//     <p>name = {Data.name}, class = {Data.class}, rollno = {Data.rollno}, level = {Data.level}</p>
//     <button onClick={Click}>Click Me!!</button>
//     </div>
//   )
// }

// export default App

// input-----------------------------------------------------------------------------------

// import React,{useState} from 'react'

// const App = () => {
//   const [name, setName] = useState("")
//   const [password, setPassword] = useState("")
//   const [Array, setArray] = useState([])
//   const Submit = (e)=>{
//     e.preventDefault()
//     setName("");
//     setPassword("")
//     const myArray = {name:name , password:password}
//     setArray([...Array,myArray])
//   }

//   return (
//     <>
//       <form onSubmit={Submit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//         </div>
//         <br></br>
//         <div>
//           <label>Password:</label>
//           <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//         </div>
//         <button>Submit</button>
//       </form>
//       {
//         Array.map((element)=>{
//           return(
//             <p>name = {element.name} , password = {element.password}</p>
//           )
//         })
//       }
//     </>
//   )
// }

// export default App


// useEffect------------------------------------------------------------------

// import React,{useState} from 'react'

// const App = () => {
//   const [size, setSize] = useState(window.screen.width)
//   const Showsize = ()=>{
//     setSize(window.innerWidth)
//   }
//   useEffect(() => {
//     window.addEventListener("resize",Showsize)
//     return () => {
//       window.removeEventListener("resize",Showsize)
//     }
//   })
//   return (
//     <div>
//       <h3>Screen size of Window</h3>
//       <p>{size}</p>

//     </div>
//   )
// }

// export default App

// useEffect fetch API-------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import Loading from "./Loading"
const App = () => {

  const [aarray, setArray] = useState([])
  const [loading, setLoading] = useState(true)

  const faetch = async () => {
    try {
      setLoading(false)
      const data = await fetch("http://jsonplaceholder.typicode.com/todos")
      const Mdata = await data.json()
      setArray(Mdata)
      console.log(aarray)

    } catch (error) {
      console.log(error)

    }


  }

  useEffect(() => {
    faetch();


  }, [])

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <>

      {
        aarray.map((element) => {
          return (
            <div className="card">
              <div className="card-header">
                Quote
            </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{element.title}.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </div>
            </div>
          )
        })

      }
    </>
  )
}

export default App
