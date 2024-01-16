import React from 'react'

const Jobs = ({ data, value }) => {
    const {  dates, title, duties, company } = data[value]
    return (
        <>

            <h2>{title}</h2>
            <h5>{dates}</h5>
            <h6>{company}</h6>
            {duties.map((elem,index)=>{
                return(
                    <div key={index}>
                    <p> {elem}</p>
                    </div>
                )
            })}
           
        </>
    )

            
        
    
}

export default Jobs
