import React, { useState,useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
const Bookmarks = () => {
  const [searchBlog, setSearchBlog] = useState("");
  const [blogsResults, setBlogsResults] = useState([]);
  const [search, setsearch] = useState("");
  const [results, setresult] = useState([]);

  const auths = JSON.parse(localStorage.getItem("auth"));

  let History = useHistory();


  const play = async (e) => {
    e.preventDefault();
    await fetch(
      "http://app.tudotechnologies.com:9009/magicFood/getAllActiveMagicFoodsMatchingSearchText/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchText: searchBlog,
          pageSize: 10,
        }),
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBlogsResults(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  const press = (id) => {
    History.push(`/BlogsDetails/${id}`);
  };

  const onChangevalue = (e) => {
    setsearch(e.target.value);
  };

  var raw = "";
  useEffect(() => {
    const searchs = async () => {
      const { data } = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/video/search",
        {
          params: {
            deviceId: "",
            pageNo: 0,
            pageSize: 20,
            searchText: search,
          },
          headers: {
            Authorization: `Bearer ${auths}`,
          },
          body: raw,
          redirect: "follow",
        }
      );
      setresult(data.data);
      console.log(data.data)
    };
    if (search.length >= 4) {
      searchs();
    }
  }, [search]);
  //   console.log(search.length)
  // console.log(results);

  return (
    <>
      <div className="wrapper right-bg" style={{ backgroundPositionY: "top" }}>
        <h1 className="page-title fw-bolder">
          From The <span>master’s diary</span>
        </h1>
        {/* ======= blog carousel  ======= */}
        <section className="toolbar pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex align-items-center">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="blogs-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#blogs"
                      role="tab"
                      aria-controls="blogs"
                      aria-selected="true"
                    >
                      <h2>Blogs</h2>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="videos-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#videos"
                      role="tab"
                      aria-controls="videos"
                      aria-selected="false"
                    >
                      <h2>Videos</h2>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <form onSubmit={play} className="card">
                  <div className="card-body row no-gutters align-items-center">
                    <div className="col">
                      <input
                        className="form-control form-control-lg form-control-borderless"
                        type="text"
                        placeholder="Search"
                        value={searchBlog}
                        onChange={(e) => {
                          setSearchBlog(e.target.value);
                        }}
                        value={search}
                        onChange={onChangevalue}
                      />
                    </div>
                    <div className="col-auto">
                      <a href="#">
                        <i className="fal fa-search fa-2x" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ======= End blog carousel ======= */}
        <div className="tab-content" id="myTabContent">
          {/* ======= blogs  ======= */}
          <div
            className="tab-pane fade show active left-bg"
            id="blogs"
            role="tabpanel"
            aria-labelledby="blogs-tab"
            style={{ backgroundPositionY: "130%" }}
          >
            <section className="blogs">
              <div className="container">
                <div className="blog-wrapper row">
                  {Object.values(blogsResults).map((item, index) => {
                    return (
                      <>
                        <div className="col-lg-4 py-2 px-0">
                          <div className="blog-card">
                            <img
                              className="card-img-top"
                              src={item.thumbnail}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean vitae facilisis lorem.
                                Integer non pharetra mauris, non tincidunt
                                metus. Aenean in lectus diam...
                              </p>
                              <div className="d-flex justify-content-between">
                                <p className="mb-0">Meditation</p>
                                <div className="blog-icons">
                                  <a href="#">
                                    <img src="img/facebook-grey.svg" />
                                  </a>
                                  <a href="#">
                                    <img src="img/twitter-grey.svg" />
                                  </a>
                                  <a href="#">
                                    <img src="img/instagram-grey.svg" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-4 my-5">
                    <div
                        onClick={() => {
                          press(item.id);
                        }}
                      key={index}
                      className="card"
                      style={{ width: "18rem" }}
                    >
                      <img src={item.thumbnail} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div> */}
                      </>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          {/* ======= end blogs  ======= */}



          {/* ======= videos  ======= */}
          <div
            className="tab-pane fade left-bg"
            id="videos"
            role="tabpanel"
            aria-labelledby="videos-tab"
            style={{ backgroundPositionY: "160%" }}
          >
            <section className="bookmark-videos">
              <div className="container">
                {/* <h1 className="fw-lighter mb-4">Meditation For Anxiety</h1> */}
                <div className="blog-wrapper row">
                  {results.map((item) => {
                    return (
                      <>
                        <div className="col-lg-4 py-2">
                          <div className="dashboard-card">
                            <div className="card">
                              <div className="card-header">
                                <img src={item.imageUrl} className="w-100" />
                                <a href="#">
                                  <img src="img/play-btn.svg" alt="" />
                                </a>
                              </div>
                              <div className="card-body">
                                <div className="card-content">
                                  <div className="card-text">
                                    <p>
                                      Breathing Exercises for anxiety issues
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div class="col-4 my-5">
                    <div
                      //   onClick={() => {
                      //     press(item);
                      //   }}
                      class="card"
                      style={{ width: "18rem" }}
                    >
                      <img src={item.imageUrl} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div> */}
                      </>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          {/* ======= end videos  ======= */}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
