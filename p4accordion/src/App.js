import React,{useState} from 'react'
import Data from './Data'
import Ques from './Ques'

const App = () => {
  const [questions, setQuestions] = useState(Data)
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h2>Questions And Answers About Login</h2>
          {questions.map((question)=>{
            return(
              <>
              <Ques key={question.id} {...question}></Ques>
              </>
            )

          })}
          
        </div>
      </div>


    </>
  )
}

export default App
