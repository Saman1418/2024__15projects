import React, { useState } from "react";
import "./App.css";
import Model from "./Components/Model.js";
import Header from "./Components/Header";
// import ISDlist from "./Components/ISDlist";
import VideoCatagories from "./Components/VideoCatagories";
import VideoLessons from "./Components/VideoLessons";
import PlayvidLessons from "./Components/PlayvidLessons";
import MyAccount from "./Components/MyAccount";
import SearchBar from "./Components/SearchBar";
import SearchBarBlogs from "./Components/SearchBarBlogs";
import SearchBarClasses from "./Components/SearchBarClasses";
import BlogDetails from "./Components/BlogDetails";
import Blogs from "./Components/Blogs";
import Login from "./Components/Login";
// import firebase from "./firebase";
// import Paginate from "./Components/Paginate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  // React.useEffect(() => {
  //   const msg = firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();

  //   }).then((data)=>{
  //     console.log("token",data)
  //   })
    
  // })

  const [show, setShow] = useState(false);
  const [auth, setauth] = useState(null);
  const [id, setID] = useState(undefined);
  const [blogID, setblogID] = useState(undefined);
  const [playVideoSelect,setPlayVideoSelect] = useState(null)
  const accessAuth = (token) => {
    setauth(token);
  };

  const videoID = (ID) => {
    setID(ID);
  };

  const displayBlogID = (displayID)=>{
    setblogID(displayID)
  }

  const selectVideo = (vid)=>{
    setPlayVideoSelect(vid)
  }

  return (
    <>
      <Router>
        <div className="App">
          <Header setShow={setShow} auth={auth} />
          
          

          <Model accessAuth={accessAuth} show={show} setShow={setShow} />

          <Switch>
            {/* <Route path="/ISDlist" component={() => <ISDlist />} /> */}
            <Route
              path="/login"
              component={() => (
                <Login auth={auth} videoID={videoID} catId={id} selectVideo={selectVideo}/>
              )}
            />
            <Route
              path="/VC"
              component={() => (
                <VideoCatagories auth={auth} videoID={videoID} catId={id} selectVideo={selectVideo}/>
              )}
            />
            <Route
              path="/VL"
              component={() => <VideoLessons auth={auth} catId={id} selectVideo={selectVideo}/>}
            />
            <Route
              path="/PVL"
              component={() => <PlayvidLessons playVideoSelect={playVideoSelect} />}
            />
            <Route
              path="/myAccount"
              component={() => (
                <MyAccount auth={auth} />
              )}
            />

            <Route
              path="/searchBar"
              component={() => (
                <SearchBar auth={auth} selectVideo={selectVideo}/>
              )}
            />
            <Route
              path="/classes"
              component={() => (
                <SearchBarClasses auth={auth} selectVideo={selectVideo}/>
              )}
            />
            <Route
              path="/blog"
              component={() => (
                <SearchBarBlogs auth={auth} selectVideo={selectVideo}/>
              )}
            />

            <Route
              path="/blogs"
              component={() => (
                <Blogs displayBlogID={displayBlogID}/>
              )}
            />

            <Route
              path="/blogDetails"
              component={() => (
                <BlogDetails blogID={blogID}/>
              )}
            />
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
