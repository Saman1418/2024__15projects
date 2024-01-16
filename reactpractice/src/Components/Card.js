import React, { useState } from "react";
import validator from 'validator';
import "./Style.css"

const Card = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [passwordError, setpasswordError] = useState("")

    const submit = (e) => {
        e.preventDefault()
        alert("Form Submit")
        
        setEmail("");
        setPassword("");
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

    const validPassword = (e) => {
        var passwordValue = e.target.value
        setPassword(passwordValue)

        if (validator.isStrongPassword(password)) {
            setpasswordError('')
        } else {
            setpasswordError('Enter valid Password!')
        }
    }


    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form onSubmit={submit}>
                    <div className="txt-field">
                        <input placeholder="Username" type="text" value={email} onChange={e => validEmail(e)} required></input>
                        <span>{emailError}</span>
                    </div>



                    <div className="txt-field">
                        <input placeholder="Password" type="password" value={password} onChange={(e) => validPassword(e)} required></input>
                        <span>{passwordError}</span>
                    </div>

                    <div className="pass"><a href="/Forget">Forget Password?</a></div>
                    <input type="submit" value="Login" ></input>
                    <div className="signup-link">To create your Account? <a href="/SignIn">SignUp</a></div>

                </form>
            </div>
        </>
    )
}
export default Card;





// const validEmail = () => {
    //     if (email.indexOf("@") <= 0) {
    //         setemailError("invalid @ position")
    //     }
    //     if (email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".") {
    //         setemailError("Invalid Email")
    //     }
    //     else{
    //         setemailError("");
    //     }
    // }

    // const validPassword = ()=>{
    //     if(password.length<=6){
    //         setpasswordError("Invalid password")
    //     }
    //     else{
    //         setpasswordError("")

    //     }
    // }





    // const submitForm1 = (e) => {
    //     var passwordValue = e.target.value
    //     setPassword(passwordValue)

    //     if (validator.isPassportNumber(password)) {
    //       setpasswordError('')
    //     } else {
    //         setpasswordError('Enter valid Email!')
    //     }
    //   }


    // const submitForm = () => {
    //     submitForm0()
    //     submitForm1()

    //     }


    // }

    // const emailhandler = (e)=>{
    //     let item = e.target.value
    //     setEmail(item)
    //     if(item.length<6){
    //         setemailError(true)
    //     }
    //     else{
    //         setemailError(false)
    //     }

    // }