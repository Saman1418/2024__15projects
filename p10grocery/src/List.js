import React from 'react'

const List = ({list,removeItem,editItem}) => {
    
    return (
        <>
            {list.map((item)=>{
                const {id,title} = item
                return(
                    <>
                    <p key={id}>{title}</p>
                    <button onClick={()=>{editItem(id)}}>Edit</button>
                    <button onClick={()=>{removeItem(id)}}>Delete</button>
                    </>
                )

            })}
        </>
    )
}

export default List
