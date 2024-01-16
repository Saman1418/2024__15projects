import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const BlogDetails = ({ blogID }) => {
  const [blogDetail, setblogDetail] = useState([]);

  useEffect(() => {
    const blog = async () => {
      const bloglist = await axios.get(
        "http://app.tudotechnologies.com:9009/magicFood/getMagicFoodDetails/",
        {
          params: {
            Id: blogID,
          },
        }
      );
      setblogDetail(bloglist.data);
    };
    blog();
  }, []);
  console.log(blogDetail);

  return (
    <>
      <div className="blogDetails">
        {Object.values(blogDetail).map((item) => {
          return (
            <>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    style={{ height: "500px !important" }}
                    src={item.coverImage}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
              {/* <img>{item.coverImage}</img> */}
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogDetails;
