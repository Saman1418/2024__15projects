import React, { useState } from "react";
import validator from 'validator';
import "./SignUp.css"
import querystring from "querystring";
import axios from "axios";

const ResetPasssword = ({setOpenLoginPopup}) => {
    
    const [countryCode, setCountryCode] = useState("")
    const [number, setNumber] = useState("")
    const [otp, setotp] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")
    

    
    // const [numberError, setNumberError] = useState("")
    // const [passwordError, setpasswordError] = useState("")
    // const [confirmPasserror, setconfirmPasserror] = useState("")



    const submit = async (e) => {
        e.preventDefault()
        let countryCode = "91"
        let mobile = number
        let confirmPassword = confirmPass
        let values1 = {countryCode,mobile,password,confirmPassword,otp}
        console.log(values1)
    
      await fetch("https://artisticyogaikriya.com/ikriya-user-service/reset/password",
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(values1),
        redirect:"follow"
    
      })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    const generate__otp = async (e)=>{
        e.preventDefault()
    let countryCode = "91"
    let mobile = number
    let values1 = {countryCode,mobile}
    console.log(values1)

  await fetch("https://artisticyogaikriya.com/ikriya-user-service/otp",
  {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(values1),
    redirect:"follow"

  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

    return (
        <>
            <div className="center">
                <h1>Reset Passsword</h1>
                <form onSubmit={submit}>


                    <div className="txt-field">
                        <input 
                        placeholder="Number" 
                        type="text" 
                        value={number} 
                        onChange={e => setNumber(e.target.value)} required></input>
                        
                    </div>
                    <div className="txt-field">
                        <input 
                        placeholder="Enter OTP" 
                        type="text" 
                        value={otp} 
                        onChange={e => setotp(e.target.value)} required></input>
                        
                        
                    </div>
                    <button onClick={generate__otp}>OTP</button>




                    <div className="txt-field">
                        <input 
                        placeholder="Password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} required></input>
                       
                    </div>


                    <div className="txt-field">
                        <input 
                        placeholder="Confirm Password" 
                        type="password" 
                        value={confirmPass} 
                        onChange={(e) => setconfirmPass(e.target.value)} required></input>
                        
                        
                    </div>

                    <input type="submit" value="Reset Password" ></input>
        

                </form>
            </div>
        </>
    )
}
export default ResetPasssword;









    // const validNumber = (e) => {
    //     var emailNumber = e.target.value
    //     setNumber(emailNumber)

    //     if (validator.isNumeric(number)) {
    //         setNumberError('')
    //     } else {
    //         setNumberError('Enter valid Number!')
    //     }
    // }

    // const validPassword = (e) => {
    //     var passwordValue = e.target.value
    //     setPassword(passwordValue)

    //     if (validator.isStrongPassword(password)) {
    //         setpasswordError('')
    //     } else {
    //         setpasswordError('Enter valid Password!')
    //     }
    // }

    // const confirmPassword = (e) => {
    //     var confirmpassValue = e.target.value
    //     setconfirmPass(confirmpassValue)

    //     if (confirmPass === password) {
    //         setconfirmPasserror('')
    //     } else {
    //         setconfirmPasserror('Enter valid Confirm Password!')
    //     }
    // }






















    //     let values = { name,email,countryCode,number,password,confirmPass};
    //     console.log(values)
    // let response = await axios.post(
    //   "https://artisticyogaikriya.com/ikriya-video-service/signup",
    //   querystring.stringify(values),
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",  
    //     },
    //   }
    //   );
    //   console.log(response)