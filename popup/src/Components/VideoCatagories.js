import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoLessons from "./VideoLessons";
import { useHistory } from "react-router";
import "./VideoCatagories.css";

const VideoCatagories = ({ videoID, selectVideo }) => {
  const [dailyData, setDailyData] = useState([]);
  const [VCdata, setVCdata] = useState([]);
  
  let History = useHistory();

  useEffect(() => {
    const everyDay = async () => {
      let daily1 = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/daily/video",
        {
          params: {
            userId: 1,
            deviceId: "89fa0e2d82fbb7e5",
            requestedDate: "2021-11-17 11:00",
          },
        }
      );
      setDailyData(daily1.data.data);
    };
    everyDay();
  }, []);
  console.log(dailyData);

  useEffect(() => {
    const video = async () => {
      let VC = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/video/category/list"
      );
      setVCdata(VC.data.data);
    };
    video();
  }, []);

  console.log(VCdata);

  const press = (id) => {
    videoID(id);
    History.push("/VL");
  };
  const press1 = (daily) => {
    selectVideo(daily);
    History.push("/PVL");
  };

  return (
    <>
      {/* {!catId && */}
      <div className="videoCatagories">
        <h1>Video Catagories</h1>
        {/* <button onClick={video}>Clickme</button> */}

        <div className="videoCatagories__list">
          {/* {dailyData.map((daily) => {
            return (
              <>
                <div
                  key={daily.id}
                  className="card videoCatagories__card"
                  style={{ width: "42rem", marginBottom: "50px" }}
                >
                  <div className="card-body">
                    <h3 className="card-title">THE DAILY CLASS</h3>
                    <p className="card-text">{daily.benefit}</p>
                  </div>
                  <img
                    src={daily.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <button
                    onClick={() => {
                      press1(daily);
                    }}
                    className="videoCatagories__lesson"
                  >
                    27 sep 2021
                  </button>
                </div>
              </>
            );
          })} */}
        </div>

        <div className="videoCatagories__list">
          {VCdata.map((vc) => {
            return (
              <>
                <div
                  key={vc.id}
                  className="card videoCatagories__card"
                  style={{ width: "42rem", marginBottom: "50px" }}
                >
                  <div className="card-body">
                    <h3 className="card-title">{vc.name}</h3>
                    <p className="card-text">{vc.description}</p>
                  </div>
                  <img src={vc.logo} className="card-img-top" alt="..." />
                  <button
                    onClick={() => {
                      press(vc.id);
                    }}
                    className="videoCatagories__lesson"
                  >
                    {" "}
                    {vc.videoCount} lessons
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* } */}
      {/* {catId &&
    <VideoLessons auth={auth} catId={catId}/>
    } */}
    </>
  );
};

export default VideoCatagories;
