import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Jobs from './Jobs'



const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)
  const url = "https://course-api.com/react-tabs-project"

  const dataFetch = async () => {
    const response = await fetch(url)
    const mainData = await response.json()
    setData(mainData)
    setLoading(false)
  }
  console.log(data)


  useEffect(() => {
    dataFetch()
  }, [])


if (loading) {
  return (
    <>
      <Loading></Loading>
    </>
  )
  }
return (
  <div>
    <h1>Experience</h1>
    {
      data.map((elem, index) => {
        return (
          <div key={index}>
            <button onClick={() => { setValue(index) }} >{elem.company}</button>
          </div>
        )
      })
    }
    <Jobs data={data} value={value}></Jobs>
  </div>
)
}

export default App
