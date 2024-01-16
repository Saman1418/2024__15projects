import React from 'react'

const ContactList = ({Contact}) => {
    const renderContact = Contact.map((element)=>{
        return(
            <>
                <p>{element.name}</p>
                <p>{element.email}</p>
            </>

        )

    })
    return (
        <>
        {renderContact}
        </>
    )
}

export default ContactList
