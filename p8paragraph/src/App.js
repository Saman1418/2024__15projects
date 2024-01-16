import React,{useState} from 'react'
import text from './Data'

const App = () => {
  const [data, setData] = useState([])
  const [count,setCount] = useState(0)

  console.log(data)
  

  const Submit = (e)=>{
    e.preventDefault()
    console.log(count)
    let amount = parseInt(count)
    if(count<=0){
      amount = 1
    }
    if(count>8){
      amount = 8
    }
    setData(text.slice(0,amount))

  }
  return (
    <div>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form onSubmit={Submit}> 
        <label>Paragraphs:</label>
        <input value={count} onChange={(e)=>{setCount(e.target.value)}} type="number"></input>
        <button>GENERATE</button>
      </form>
      <div>
        {data.map((elem,index)=>{
          return(
            <>
            <p key={index}>{elem}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
