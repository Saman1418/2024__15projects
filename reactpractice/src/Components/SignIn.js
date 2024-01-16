import React, { useState } from "react";
import validator from 'validator';
import "./Style.css"

const SignIn = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")
    

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [confirmPasserror, setconfirmPasserror] = useState("")



    const submit = (e) => {
        e.preventDefault()
        alert("Form Submit")
        
        setName("");
        setEmail("");
        setPassword("");
        setconfirmPass("")
        
    }

    const validName = (e) => {
        var nameValue = e.target.value
        setName(nameValue)

        if (validator.isAlpha(name)) {
            setNameError('')
        } else {
            setNameError('Enter valid Name!')
        }
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

    const confirmPassword = (e) => {
        var confirmpassValue = e.target.value
        setconfirmPass(confirmpassValue)

        if (confirmPass === password) {
            setconfirmPasserror('')
        } else {
            setconfirmPasserror('Enter valid Confirm Password!')
        }
    }


    return (
        <>
            <div className="center">
                <h1>Sign Up</h1>
                <form onSubmit={submit}>


                    <div className="txt-field">
                        <input placeholder="Name" type="text" value={name} onChange={e => validName(e)} required></input>
                        <span>{nameError}</span>
                    </div>


                    <div className="txt-field">
                        <input placeholder="Username" type="text" value={email} onChange={e => validEmail(e)} required></input>
                        <span>{emailError}</span>
                    </div>



                    <div className="txt-field">
                        <input placeholder="Password" type="password" value={password} onChange={(e) => validPassword(e)} required></input>
                        <span>{passwordError}</span>
                    </div>


                    <div className="txt-field">
                        <input placeholder="Confirm Password" type="password" value={confirmPass} onChange={(e) => confirmPassword(e)} required></input>
                        <span>{confirmPasserror}</span>
                        
                    </div>



                    {/* <div className="pass">Forget Password?</div> */}
                    <input type="submit" value="Signup" ></input>
                    <div className="signup-link">Already have account? <a href="/">Login</a></div>

                </form>
            </div>
        </>
    )
}
export default SignIn;