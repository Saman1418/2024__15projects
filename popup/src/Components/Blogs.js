import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blogs.css"
import { useHistory } from "react-router";
import Carousel from "react-bootstrap/Carousel";


const Blogs = ({displayBlogID}) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  let History = useHistory();

  useEffect(() => {
    const liveBlogs = async () => {
      const blogDetails = await axios.get(
        "http://app.tudotechnologies.com:9009/magicFood/getAllActiveMagicFoods/",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            startIndex: 0,
            pageSize: 2,
          })
        }
      );
      setBlogs(blogDetails.data.data);
      setLoading(false);
    };
    liveBlogs();
  }, []);
  console.log(blogs);
  localStorage.setItem("YogaBlogs", JSON.stringify(blogs));
  var retrievedData = localStorage.getItem("YogaBlogs");
  var test2 = JSON.parse(retrievedData);


  const display = (id)=>{
    displayBlogID(id)
    History.push("/blogDetails");



  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <h1 className="blogs__title">Blogs</h1>
    <div className="blogs">
    
      {Object.values(test2).map((parts) => {
        return (
          <>
            <div key={parts.id}>
              <div onClick={()=>{display(parts.id)}} class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={parts.thumbnail} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title">{parts.name}</h4>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    style={{ height: "500px !important" }}
                    src={parts.coverImage}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel> */}

              <div>
                
              </div>
            </div>
          </>
        );
      })}
    </div>
    </>
  );
};

export default Blogs;

// const game = async ()=>{
//   await fetch("http://app.tudotechnologies.com:9009/magicFood/getAllActiveMagicFoods/",
//   {
//     method:"GET",
//     headers:{
//       "Content-Type": "application/json",
//     },
//     // body:JSON.stringify(values1),
//     redirect:"follow"

//   })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

// "Access-Control-Allow-Origin": "*",
