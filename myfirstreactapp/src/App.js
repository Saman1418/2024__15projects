import logo from './logo.svg';
import './App.css';
import React from 'react';

 
class App extends React.Component{
  state = {arrs:[]}
  response = fetch("https://corona.lmao.ninja/v2/countries")
  .then((res)=>res.json())
  .then(data=>this.setState({arrs:data}))

  

  render(){
    return(
      <div>{this.state.arrs}</div>
    )

    
  }
}




// import React, { useState } from 'react';

// const App = () => {
//   const [name,newName] = useState("")
//   const [nname,nnewName] = useState("")
//   const chnge = (event) =>{
//     console.log(event.target.value)
//     newName(event.target.value)

//   }
//   const click = (event)=>{
//     event.preventDefault()
//     nnewName(name)

//   }
//   return (
//     <>
//     <form onSubmit={click}>
//       <div>
//         <h1>Hello {nname} </h1>
//         <input type="text" placeholder="What is your name" onChange={chnge} value={name}></input>
//         <br></br>
//         <button type="submit">Click Me</button>
//       </div>
//       </form> 
//     </>
//   )
// }

export default App;






















// const keys = "1";
// const display = () => {
//   if (keys === "1") {
//     return <Odd></Odd>
//   }
//   else {
//     return <Even></Even>
//   }
// }


// const App = () => (
<>
  {/* <Odd></Odd> */}
  {/* <Even></Even> */}
  {/* <display/> */}
  {/* {keys == "1" ? <Odd></Odd> : <Even></Even>} */}
</>
// )

// export default App;



// function App() {



// <>
{/* <name></name> */ }
{/* <sname></sname> */ }
{/* <Heading></Heading>
    <Para></Para>
    <List></List> */}
    // {/* </> */}
  // ;
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

// export default App;
// export {sums};
