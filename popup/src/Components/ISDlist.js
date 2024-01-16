import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ISDlist.css"

function ISDlist() {
  const [ISDdata, setISDdata] = useState([]);

  const clickme = async () => {
    var ISD = await axios.get(
      " https://artisticyogaikriya.com/ikriya-video-service/isd/list"
    );
    setISDdata(ISD.data.data);
  };

  console.log(ISDdata);

  

  return (
    <div className="ISDlist">
      <button onClick={clickme}>ClickME</button>
      <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Capital</th>
                  <th scope="col">Dial</th>
                  <th scope="col">Currency</th>
                </tr>
              </thead>

      {ISDdata.map((country) => {
        return (
          <>
            
              <tbody>
                <tr>
                 
                  <td>{country.id}</td>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.dial}</td>
                  <td>{country.currency}</td>
                  
                </tr>
              </tbody>
           
          </>
        );
      })}
      </table>
    </div>
  );
}

export default ISDlist;
