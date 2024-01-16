import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Avatar } from "@material-ui/core";

const SearchBarBlogs = () => {
  const [searchBlog, setSearchBlog] = useState("");
  const [blogsResults, setBlogsResults] = useState([]);

  const onChangevalue = (e) => {
    setSearchBlog(e.target.value);
  };


  const play = async ()=>{
    await fetch("http://app.tudotechnologies.com:9009/magicFood/getAllActiveMagicFoodsMatchingSearchText/",
  {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "searchText": searchBlog,
      "pageSize": 1,
    }),
    redirect:"follow"

  })
    .then(response => response.json())
    .then(result => {console.log(result)
    setBlogsResults(result.data)})
    .catch(error => console.log('error', error));
    

}


  // useEffect(() => {
  //   const searchss = async () => {
  //     const  data  = await axios.post(
  //       "http://app.tudotechnologies.com:9009/magicFood/getAllActiveMagicFoodsMatchingSearchText/",
  //       {
          
  //           headers: {
  //               "Content-Type": "application/json",
  //           },
  //         body: JSON.stringify({
  //           "searchText": searchBlog,
  //           "pageSize": 1
  //         }),
  //         redirect: "follow",
  //       }
  //     );
  //     setBlogsResults(data);
  //   };
  //   if (searchBlog.length >= 4) {
  //     searchss();
  //   }
  // }, [searchBlog]);
  // console.log(searchBlog.length);
  // console.log(blogsResults);

  
  return (
    <>
      <div className="searchBar">
        <div className="searchbar__field">
          <input
            className="input__field"
            type="text"
            placeholder="Search"
            value={searchBlog}
            onChange={onChangevalue}
          />
          <Link to={"/classes"}>
            <button>Classes</button>
          </Link>
          <Link to={"/blog"}>
            <button>Blog</button>
          </Link>
          <button onClick={play}>Search</button>


          <div className="blogs">
    
      {Object.values(blogsResults).map((parts) => {
        return (
          <>
            <div key={parts.id}>
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
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

              <div>
                
              </div>
            </div>
          </>
        );
      })}
    </div>

          
        </div>
      </div>
    </>
  );
};

export default SearchBarBlogs;



























// await fetch("https://artisticyogaikriya.com/ikriya-user-service/reset/password",
//       {
//         method:"POST",
//         headers:{
//           "Content-Type": "application/json",
//         },
//         body:JSON.stringify(values1),
//         redirect:"follow"
    
//       })
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     }