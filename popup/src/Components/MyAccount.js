import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import "./MyAccount.css";

const MyAccount = ({ auth }) => {
  const [userData, setuserData] = useState([]);
  const [referralCode, setReferralCode] = useState([]);
  const [refereeIist, setRefereeIist] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch("https://artisticyogaikriya.com/ikriya-video-service/user/detail", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        fcm_token: null,
        timeZone: null,
      }),
    }).then((response) => {
      response.json().then((resp) => {
        // console.log(resp);
        setuserData(resp);
      });
    });
    console.log(userData.data);
    
  }, []);
  

  const first = async () => {
    const firstAPI = await axios.get(
      "https://artisticyogaikriya.com/ikriya-video-service/user/referral",
      {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }
    );
    setReferralCode(firstAPI.data);
  };
  console.log(referralCode);

  const second = async () => {
    const secondAPI = await axios.get(
      "https://artisticyogaikriya.com/ikriya-video-service/user/referee",
      {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }
    );
    setRefereeIist(secondAPI);
  };
  console.log(refereeIist);

  const third = async () => {
    const thirdAPI = await axios.get(
      "https://artisticyogaikriya.com/ikriya-video-service/user/payment/history",
      {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }
    );
    setPaymentHistory(thirdAPI.data.data);
  };
  console.log(paymentHistory);




  

  return (
    <>
    <div className="details">
    <h2>User Details</h2>
      {Object.values(userData).map((user) => {
        return (
          <>
            <div class="card center" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{user.firstName}</h5>
                <p class="card-text">{user.email}</p>
                <p class="card-text">{user.mobile}</p>
                <p class="card-text">{user.role}</p>
              </div>
            </div>
          </>
        );
      })}
      </div>

      <div className="myAccount">
        <div className="myAccount__first">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              first();
            }}
          >
            Referral code
          </button>
          
          {Object.values(referralCode).map((code)=>{
            return(
              <>
              <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h3 class="card-title">{code.firstName}</h3>
                <p class="card-text">{code.email}</p>
                <p class="card-text">{code.mobile}</p>
                <h3 class="card-text">{code.referralCode}</h3>
              </div>
            </div>
            
              </>
            )
          })}
          </div>
          



        <div className="myAccount__second">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              second();
            }}
          >
            referee list
          </button>
          {Object.values(refereeIist).map((code)=>{
            return(
              <>
              <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h3 class="card-title">{code.message}</h3>
                {/* <p class="card-text">{code.email}</p> */}
                {/* <p class="card-text">{code.mobile}</p> */}
                {/* <h3 class="card-text">{code.referralCode}</h3> */}
              </div>
            </div>
            
              </>
            )
          })}
        </div>




        <div className="myAccount__third">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              third();
            }}
          >
            payment history
          </button>
          {Object.values(paymentHistory).map((payment)=>{
            return(
              <>
              <div class="card" style={{ width: "30rem" }}>
              <div class="card-body">
                <h5 class="card-title">{`OrderName : ${payment.orderName}`}</h5>
                <p class="card-text">{`Mode : ${payment.mode}`}</p>
                <p class="card-text">{`RecieptNo : ${payment.recieptNo}`}</p>
                <p class="card-text">{`Amount : ${payment.amount}`}</p>
                
              </div>
            </div>
            
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default MyAccount;
















// const details = async ()=>{
    //     const res = await axios.post("https://artisticyogaikriya.com/ikriya-video-service/user/detail",
    //     {
    //         headers:{
    //             Authorization: `Bearer ${auth}`,
    //             "Content-Type": "application/json"
    //         },
    //         body:JSON.stringify({
    //             "fcm_token": null,
    //             "timeZone": null
    //         })

    //     })
    //     setuserData(res)
    // }
    // details()
    // console.log(userData)