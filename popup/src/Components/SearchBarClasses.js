import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const SearchBarClasses = ({auth,selectVideo}) => {
    const [search, setsearch] = useState("");
  const [results, setresult] = useState([]);

  const onChangevalue = (e) => {
    setsearch(e.target.value);
  };

  // const onEnterSubmit = (e) => {
  //     e.preventDefault()
  //     console.log(search)

  // }
  var raw = "";
  useEffect(() => {
    const searchs = async () => {
      const { data } = await axios.get("https://artisticyogaikriya.com/ikriya-video-service/video/search", {
        
          params:{
            deviceId:"",
            pageNo:0,
            pageSize:20,
            searchText:search,
          },
          headers: {
            Authorization: `Bearer ${auth}`,
          },
          body: raw,
          redirect: 'follow'
      });
      setresult(data.data);
    };
    if (search.length>=4) {
      searchs();
    }
  }, [search]);
  console.log(search.length)
  console.log(results)

  
  const playVideo = (oneVideo)=>{
    selectVideo(oneVideo)
  }
    return (
        <>
      <div className="searchBar">
      <div className="searchbar__field">
      
        <input
        className="input__field"
          type="text"
          placeholder="Search"
          value={search}
          onChange={onChangevalue}
        />
        <Link to={"/classes"}>
        <button>Classes</button>
        </Link>
        <Link to={"/blog"}>
        <button>Blogs</button>
        </Link>
        
        
        </div>

        <div className="side">
          {results.map((Item) => {
            return (
              <>
                <Link to={"/PVL"}>
                  
                    <div
                      key={Item.id}
                      className="videoCard"
                      onClick={() => {
                        playVideo(Item);
                      }}
                    >
                      <img
                        className="videoCard__thubnail"
                        src={Item.imageUrl}
                        alt="video"
                      />

                      <div className="videoCard__info">
                        <Avatar
                          className="videoCard__Avatar"
                          src={Item.imageUrl}
                        />

                        <div className="videoCard__text">
                          <h2>{Item.name}</h2>
                          <p>{Item.description}</p>
                          <p>{Item.benefit}</p>
                        </div>
                      </div>
                    </div>
                </Link>
              </>
            );
          })}
          </div>
      </div>

    </>
 
    )
}

export default SearchBarClasses;
