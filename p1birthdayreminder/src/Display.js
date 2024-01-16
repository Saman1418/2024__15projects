import React from 'react'

const Display = ({person}) => {
    return (
        <>
        {person.map((people)=>{
            return(
                <>
                    <div>{people.name},
                    {people.age}
                    </div>
        
                </>
            )

        })}
        </>
            
    )
}

export default Display;
