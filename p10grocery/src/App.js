import React,{useState} from 'react'
import List from './List'

const App = () => {
  const [name, setName] = useState("")
  const [list, setList] = useState([])

  const eventHandler=(e)=>{
    e.preventDefault()
    setName("")
    const newName = {id: new Date().getTime().toString(),title:name}
    setList([...list,newName])
    console.log(list)

  }

  const removeItem = (id)=>{
    const remove = list.filter((elem)=>elem.id!==id)
    setList(remove)
  }
  const editItem = (id)=>{
    const edit = list.find((elem)=>elem.id===id)
    setName(edit.title)
  }
  return (
    <>
    <div>
      <h3>Grocery Bud</h3>
    </div>
    <form onSubmit={eventHandler}>
    <input type="text" placeholder="e.g eggs"
    value={name}
    onChange={(e)=>{setName(e.target.value)}}></input>
    <button type="submit">Submit</button>
    </form>
    <List list={list} removeItem={removeItem} editItem={editItem}></List>
    <div>
    <button onClick={()=>{setList([])}}>Clear all</button>
    </div>
    
    
    </>
    
  )
}

export default App
