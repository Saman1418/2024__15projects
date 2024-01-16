import React from 'react'

const Menu = ({ item }) => {
    return (
        <>
            {
                item.map((elem) => {
                    const { id, title, price, img, desc } = elem
                    return (
                        <>

                            <article key={id} className='menu-item'>
                                <img src={img} alt={title} className='photo' alt={title} />
                                <div className='item-info'>
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className='price'>${price}</h4>
                                    </header>
                                    <p className='item-text'>{desc}</p>
                                </div>
                            </article>
                        </>
                    )

                })
            }

        </>
    )
}

export default Menu
