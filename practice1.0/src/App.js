import React,{useState} from 'react'
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'

const App = () => {
  const [Contact, setContact] = useState([])
  const addContactHandler = (item)=>{
    console.log(item)
    setContact([...Contact,item])

  }
  return (
    <>
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList Contact={Contact}></ContactList>
    </>
  )
}

export default App
