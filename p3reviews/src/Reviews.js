import React,{useState} from 'react'
import Data from "./Data"

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name,job,image,text} = Data[index]

    const cheakNumber =(number)=>{
        if(number>Data.length-1){
            return 0
        }
        if(number<0){
            return Data.length-1
        }
        else{
            return number
        }
    }

    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return cheakNumber(newIndex);
        })
        
        
    }
    const prevPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index - 1
            return cheakNumber(newIndex)
        })
        
    }
    
    return (
        <>
            <div class="card" style={{width: "18rem;"}}>
                <img src={image} style={{width: "180px",height:"auto"}}class="card-img-top" alt={name} />
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h5 class="card-title">{job}</h5>
                    <p class="card-text">{text}</p>
                    <button onClick={prevPerson}>-</button>
                    <button onClick={nextPerson}>+</button>
                    <br></br>
                    <br></br>
                    <button class="btn btn-primary">Surpice me</button>
                </div>
            </div>
        </>
    )
}

export default Reviews
