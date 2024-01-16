import React, { useEffect, useState } from 'react'
import Display from './Display';
import Loading from './Loading';


const url = "https://course-api.com/react-tours-project";

const App = () => {

  const [tour, setTour] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour =  (id)=>{
    const Filter = tour.filter((remove)=> remove.id!==id)
    setTour(Filter)

  }

  const fetchAll = async () => {
    setLoading(true)
    try {
      const data = await fetch(url)
      const mainData = await data.json()
      setLoading(false)
      setTour(mainData)

    } catch (error) {
      setLoading(false)
      console.log(error)

    }

  }
  
  useEffect(() => {
    fetchAll()
  }, [])

  if(loading){
    return(
      <>
        <Loading></Loading>
      </>
    )
  }
  if(tour.length===0){
    return(
      <>
      <div className="container">
        <h3>No tour available</h3>
        <button onClick = {()=>{fetchAll()}}>Refresh</button>
      </div>
      </>
    )
  }

  return (
    <>
      <div className="container">
        <h3>Our Tours</h3>
        <Display tour={tour} removeTour={removeTour}></Display>
      </div>
    </>
  )
}

export default App
