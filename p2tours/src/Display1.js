import React,{useState} from 'react'

const Display1 = ({id,name, info, image, price ,removeTour}) => {
    const [remove, setremove] = useState(false)
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{
                        remove?info:`${info.substring(0,200)}...`
                        }
                        <button onClick={()=>{setremove(!remove)}}>
                            {remove?"Show less":"Read more"}
                        </button>
                        </p>
                    <button onClick={()=>{removeTour(id)}} className="btn btn-primary">Not intrested</button>
                </div>
            </div>
        </>
    )
}

export default Display1
