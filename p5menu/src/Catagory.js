import React from 'react'

const Catagory = ({ categories,filterItems }) => {
    return (
        <div className="btn-container">
            {
                categories.map((elem,index) => {
                    return (
                        <>
                            <button
                                type="button"
                                className="filter-btn"
                            key={index}
                            onClick={() => filterItems(elem)}
                            >
                                {elem}
                            </button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Catagory
