import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Player } from "video-react";
import "./VideoLessons.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
// import Paginate from "./Paginate";

const VideoLessons = ({ auth, catId, selectVideo }) => {
  const [VLvideos, setVLvideos] = useState([]);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const vl = async () => {
      const video = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/video/list",
        {
          params: {
            pageNo: page,
            pageSize: 1,
            categoryId: catId,
          },

          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      );
      setVLvideos(video.data.data);
    };
    vl();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const video = await axios.get(
      "https://artisticyogaikriya.com/ikriya-video-service/video/list",
      {
        params: {
          pageNo: page,
          pageSize: 5,
          categoryId: catId,
        },

        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }
    );
    setVLvideos(VLvideos.concat(video.data.data));
  };

  console.log(VLvideos);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <>
      <div className="videoLessons">
        <InfiniteScroll
          dataLength={VLvideos.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4 className="h4">Loading...</h4>}
        >
        <div className="side">
          {VLvideos.map((oneItem) => {
            return (
              <>
                <Link to={"/PVL"}>
                  
                    <div
                      className="videoCard"
                      onClick={() => {
                        selectVideo(oneItem);
                      }}
                    >
                      <img
                        className="videoCard__thubnail"
                        src={oneItem.imageUrl}
                        alt="video"
                      />

                      <div className="videoCard__info">
                        <Avatar
                          className="videoCard__Avatar"
                          src={oneItem.imageUrl}
                        />

                        <div className="videoCard__text">
                          <h2>{oneItem.name}</h2>
                          <p>{oneItem.description}</p>
                          <p>{oneItem.benefit}</p>
                        </div>
                      </div>
                    </div>
                </Link>
              </>
            );
          })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default VideoLessons;

// {
/* <Player
      className="videoCard__thubnail"
      playsInline
      fluid={false}
      width={700}
      height={500}
      src={oneItem.url}
      /> */
// }

//   const vid = VLvideos.map((oneItem) => {
//     return (
//         // <Link to={"/PVL"}>
//       <Carousel.Item
//       onClick={()=>{selectVideo(oneItem)}}
//       >
//         {/* <img
//   className="d-block w-100"
//   src={oneItem.imageUrl}
//   alt="First slide"
// /> */}
//         <Player
//           className="videoCard__thubnail"
//           playsInline
//           fluid={false}
//           width={700}
//           height={500}
//           src={oneItem.url}
//         />
//         <Carousel.Caption>
//           <h3>{oneItem.name}</h3>
//           <p>{oneItem.benefit}</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       // </Link>

//     );
//   });

{
  /* 
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {VLvideos.map((oneItem) => {
            return (
              <Carousel.Item
                onClick={() => {
                  selectVideo(oneItem);
                }}
              >
                <Link to={"/PVL"}>
                  <img
                    className="d-block w-100"
                    src={oneItem.imageUrl}
                    alt="First slide"
                  />
                </Link>

                <Carousel.Caption>
                  <h3>{oneItem.name}</h3>
                  <p>{oneItem.benefit}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
          ;
        </Carousel> */
}
{
  /* <Paginate /> */
}
