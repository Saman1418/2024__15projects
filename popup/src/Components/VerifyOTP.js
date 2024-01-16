import React,{useState} from "react";
import { useHistory } from "react-router";

const VerifyOTP = ({closeVerifyOTP}) => {
  let History = useHistory();
    const [otp, setotp] = useState("")

  const submit = async (e) => {
    e.preventDefault();
    let countryCode = "91"
    let mobile = "9953822945"
    let values2 = {countryCode,mobile,otp}
    console.log(values2)

    await fetch(
      "https://artisticyogaikriya.com/ikriya-user-service/otp/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values2),
        redirect: "follow",
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      History.push("/VC");
      closeVerifyOTP(false)
  };

  return (
    <div className="verifyOTP">
      <h3>Please send the OTP in this number </h3>
      <form onSubmit={submit}>
        <input 
        type="text" 
        placeholder="OTP"  
        value={otp}
        onChange={(e) => setotp(e.target.value)}
        required/>
        <button>Verify</button>
      </form>
    </div>
  );
};

export default VerifyOTP;
