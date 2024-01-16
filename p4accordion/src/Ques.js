import React,{useState} from 'react'

const Ques = ({ title, info }) => {
    const [showInfo, setshowInfo] = useState(false)
    return (
        <>
            <div class="card">
                <div class="card-body">
                    {title}
                    <button onClick={()=>{setshowInfo(!showInfo)}}>{showInfo?"-":"+"}</button>
                </div>
                {showInfo && <p>{info}</p>}
            </div>
        </>
    )
}

export default Ques
