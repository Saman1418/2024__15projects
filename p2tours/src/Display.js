import React from 'react'
import Display1 from './Display1'

const Display = ({ tour ,removeTour}) => {
    return (
        <>
            {
                tour.map((country) => {
                    return (
                        <Display1 key={country.id} {...country} removeTour={removeTour}></Display1>
                        

                    )

                })
            }
        </>


    )
}

export default Display