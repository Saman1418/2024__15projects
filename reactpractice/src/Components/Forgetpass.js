import React, { useState } from "react";
import validator from 'validator';
import "./StyleForgetpass.css"

const Forgetpass = () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    

    const submit = (e) => {
        e.preventDefault()
        alert("Form Submit")
        
        setEmail("");
    }


    const validEmail = (e) => {
        var emailValue = e.target.value
        setEmail(emailValue)

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    return (
        <>
            <div className="center">
                <h2>Enter Your Email</h2>
                <form onSubmit={submit}>
                    <div className="txt-field">
                        <input placeholder="Username" type="text" value={email} onChange={e => validEmail(e)} required></input>
                        <span>{emailError}</span>
                    </div>



                    

                    
                    <input type="submit" value="Submit" ></input>
                    

                </form>
            </div>
        </>
    )
}
export default Forgetpass;