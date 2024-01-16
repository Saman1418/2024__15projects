import React,{Component} from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

export default class AboutUs extends Component{

  constructor(){
    super();
    this.state={
      nav1:null,
      nav2:null
    }
  }
  componentDidMount(){
    this.setState({
      nav1:this.teacherNameSlider,
      nav2:this.teacherDetailsSlider
    })
  }




  render(){
    const settings = {
      vertical: true,
      slidesToShow: 6,
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: false,
      focusOnSelect: true,
    
    };
  
    const settings1 = {
      slidesToShow: 1,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: false,

      // asNavFor: ".teacher-name-carousel",
      prevArrow: <img className="left-arrow" src="img/arrow(left).png" />,
      nextArrow: <img className="right-arrow" src="img/arrow(right).png" />,
    };
    return (
    <>
      <section
        id="hero"
        className="d-flex align-items-end px-lg-5"
        style={{ paddingBottom: 0 }}
      >
        <img
          className="about-banner"
          src="img/about-banner.png"
          alt=""
          style={{ margin: "0 auto" }}
        />
      </section>
      {/* ======= End Hero Section ======= */}
      {/* ======= Heading Section ======= */}
      <section id="aboutHeading" className="d-flex">
        <h2 style={{ margin: "0 auto" }}>
          ABOUT <span>US</span>
        </h2>
      </section>
      {/* ======= About ======= */}
      <section id="aboutPageContent" className="about">
        {/* about */}
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 d-flex align-items-center">
              <p>
                The concept of Artistic Yoga took birth in 1999 as a response to
                the slow and ineffective style of Yoga that was being practiced
                in India at the time. Dr. Bharat Thakur's idea was to combine
                the most modern and scientific methods of Sports Medicine with
                powerful ancient Yogic practices to provide a complete workout
                for the body as well as stabilization and relaxation to the
                breath and the mind.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <video
                id="player1"
                className="w-100"
                playsInline
                controls
                data-poster="/path/to/poster.jpg"
              >
                <source src="img/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* about our classes */}
      <section className="about" style={{ padding: "20px 0 0 0" }}>
        <div className="right-bg" style={{ backgroundSize: "18%" }}>
          <div className="container pt-5">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-5">
                <img src="img/about.png" className="h-100" alt="" />
              </div>
              <div className="aboutPage-content col-lg-6 d-flex align-items-center">
                <p>
                  With centers in New Delhi, Mumbai, Bangalore, Chennai and
                  Hyderabad. Bharat Thakur carefully chose a handful of his own
                  students that he would train personally to make into his
                  Senior Teachers. His students at the time were the top of
                  their field - be in business or films. From actors Salman Khan
                  to Kareena Kapoor; from actor Priyanka Chopra to Katrina Kaif;
                  from actor Manisha Koirala to singer Sunidhi Chauhan to
                  director David Dhawan; from tennis player Mahesh Bhupathi to
                  tennis legend Boris Becker and cricketer Shane Warne; From
                  industrialist Ratan Tata to Sunil Mittal of Airtel; from Sarod
                  legend Amjad Ali Khan to Sitarist Anoushka Shankar - they all
                  learnt from him or his senior most trainers that exclusively
                  worked for him. Artistic Yoga has also conducted sessions at
                  corporate conferences and events for many organizations
                  including Airtel, Air Sahara, Infosys, Hindustan Unilever,
                  Schlumberger, UTV, Novartis and several more across India,
                  Dubai and Moscow.
                </p>
              </div>
            </div>
          </div>
          {/* About our class */}
          <div className="container pt-5">
            <h3 className="my-5">About Our Classes</h3>
            <div className="row d-flex align-items-center">
              <p>
                Artistic Yoga is a thoroughly researched, ground breaking system
                that focuses on all five aspects of fitness, namely strength,
                cardiovascular endurance, flexibility, agility and balance.
                Additionally, balancing hormones, cleansing the system from
                toxins, as well as meditation are key aspects of the class that
                give a complete body mind workout.
              </p>
              <p>
                {" "}
                Our aim is to not only make you sweat, but also raise your
                levels of serotonin and endorphins so that you feel great from
                within. This is done using some of the most ancient yogic
                techniques that Dr. Bharat Thakur learnt directly from the
                Himalayan Masters he lived with during his childhood. Calm,
                centred, energetic and alert - this is how you should feel after
                a session of Artistic Yoga. This is your optimum 'flow' state
                where your mind and body functions at its optimal state and your
                immunity is naturally at its highest! Also, our approach is
                casual and easy and we avoid unnecessary new age jargon and
                paraphernalia that yoga all over the world is now associated
                with. We have a straightforward approach that is focussed and
                aims to give you results.
              </p>
              <p>
                People of all age groups and all levels of fitness can practice
                Artistic Yoga. One of our main goals is to reduce the high
                stress levels and the related diseases like Obesity, Diabetes,
                High BP, Heart Problems, Asthma, Back Problems etc. that follow.
                Our clients have experienced tremendous and fundamental changes
                in a relatively short span of time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section style={{ padding: "20px 0 0 0" }}>
        <div
          className="left-bg"
          style={{ backgroundPositionY: "190%", backgroundSize: "20%" }}
        >
          <div className="container pt-5 py-5">
            <h3 className="my-5">Benefits</h3>
            <div className="row d-flex align-items-center">
              <img src="img/about-benefits.png" />
            </div>
          </div>
        </div>
      </section>
      {/* Instructor */}
      <section style={{ padding: 0, backgroundColor: "#FFF3E9" }}>
        <div className="container pt-5 py-5">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 d-flex align-items-start flex-column justify-content-center">
              <h2>Mr. Bharat Thakur</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt est quis erat eleifend dictum. Sed enim turpis,
                lobortis eget vestibulum ac, dictum ac erat.{" "}
              </p>
              <br />
              <Link to={"/aboutFounder"}>
              <a href="#" className="know-btn scrollto">
                About our founder
              </a>
              </Link>
            </div>
            <div className="col-lg-5 d-flex align-items-start flex-column aboutPage-content">
              <img
                src="img/about.png"
                className="h-100"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Our Teachers */}
      <section className="teachers">
        <div className="container">
          <h3 className="my-2">Our Teachers</h3>
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <div className="wrapper">
                
                  <Slider ref={slider=>(this.teacherNameSlider=slider)}   asNavFor={this.state.nav2} className="teacher-name-carousel m-lg-4" {...settings}>
                  <div>
                    <div className="d-flex align-items-center" href>
                      <i className="fas fa-circle" />
                      <p className="m-0">Rahul</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center" href>
                      <i className="fas fa-circle" />
                      <p className="m-0">Ashrei Mitra</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center" href>
                      <i className="fas fa-circle" />
                      <p className="m-0">Ashray</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center" href>
                      <i className="fas fa-circle" />
                      <p className="m-0">Ashish</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center" href>
                      <i className="fas fa-circle" />
                      <p className="m-0">Zora</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center" href>
                      <i className="fas fa-circle" />
                      <p className="m-0">Ashrei Mitra</p>
                    </div>
                  </div>
                  </Slider>
              
              </div>
            </div>
            <div className="col-lg-9">
              <div className="wrapper">
                  <Slider className="teacher-carousel" ref={slider=>(this.teacherDetailsSlider=slider)} {...settings1} asNavFor={this.state.nav1}>
                    <div>
                      <div className="teacher-card">
                        <div className="teacher-gray-card">
                          <div className="teacher-img-container">
                            <img className="box" src="img/teacher.png" alt="" />
                            <div className="box stack-top" />
                          </div>
                          <div className="col-lg-3 teacher-name">
                            <h4>Rahul</h4>
                          </div>
                          <div className="col-lg-9">
                            <p>
                              Ashrei Mitra started his journey in yoga at the
                              age of 16. He was chosen by his master Dr. Bharat
                              Thakur from a meditation workshop and has worked
                              with him closely for many years to become one of
                              the most senior teachers at Bharat Thakur Artistic
                              Yoga. Combining his love of fitness, breathwork,
                              functional training, and his deep knowledge of the
                              human anatomy and yogic knowhow, he is committed
                              to maximizing on the human potential by
                              strengthening and opening up the body so that the
                              mind naturally falls into a deep state of
                              relaxation and meditation. He has taught yoga to
                              people from all walks of life including athletes,
                              celebrities and several top corporate
                              organizations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="teacher-card">
                        <div className="teacher-gray-card">
                          <div className="teacher-img-container">
                            <img className="box" src="img/teacher.png" alt="" />
                            <div className="box stack-top" />
                          </div>
                          <div className="col-lg-3 teacher-name">
                            <h4>Ashrei Mitra</h4>
                          </div>
                          <div className="col-lg-9">
                            <p>
                              Ashrei Mitra started his journey in yoga at the
                              age of 16. He was chosen by his master Dr. Bharat
                              Thakur from a meditation workshop and has worked
                              with him closely for many years to become one of
                              the most senior teachers at Bharat Thakur Artistic
                              Yoga. Combining his love of fitness, breathwork,
                              functional training, and his deep knowledge of the
                              human anatomy and yogic knowhow, he is committed
                              to maximizing on the human potential by
                              strengthening and opening up the body so that the
                              mind naturally falls into a deep state of
                              relaxation and meditation. He has taught yoga to
                              people from all walks of life including athletes,
                              celebrities and several top corporate
                              organizations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="teacher-card">
                        <div className="teacher-gray-card">
                          <div className="teacher-img-container">
                            <img className="box" src="img/teacher.png" alt="" />
                            <div className="box stack-top" />
                          </div>
                          <div className="col-lg-3 teacher-name">
                            <h4>Ashray</h4>
                          </div>
                          <div className="col-lg-9">
                            <p>
                              Ashrei Mitra started his journey in yoga at the
                              age of 16. He was chosen by his master Dr. Bharat
                              Thakur from a meditation workshop and has worked
                              with him closely for many years to become one of
                              the most senior teachers at Bharat Thakur Artistic
                              Yoga. Combining his love of fitness, breathwork,
                              functional training, and his deep knowledge of the
                              human anatomy and yogic knowhow, he is committed
                              to maximizing on the human potential by
                              strengthening and opening up the body so that the
                              mind naturally falls into a deep state of
                              relaxation and meditation. He has taught yoga to
                              people from all walks of life including athletes,
                              celebrities and several top corporate
                              organizations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="teacher-card">
                        <div className="teacher-gray-card">
                          <div className="teacher-img-container">
                            <img className="box" src="img/teacher.png" alt="" />
                            <div className="box stack-top" />
                          </div>
                          <div className="col-lg-3 teacher-name">
                            <h4>Ashish</h4>
                          </div>
                          <div className="col-lg-9">
                            <p>
                              Ashrei Mitra started his journey in yoga at the
                              age of 16. He was chosen by his master Dr. Bharat
                              Thakur from a meditation workshop and has worked
                              with him closely for many years to become one of
                              the most senior teachers at Bharat Thakur Artistic
                              Yoga. Combining his love of fitness, breathwork,
                              functional training, and his deep knowledge of the
                              human anatomy and yogic knowhow, he is committed
                              to maximizing on the human potential by
                              strengthening and opening up the body so that the
                              mind naturally falls into a deep state of
                              relaxation and meditation. He has taught yoga to
                              people from all walks of life including athletes,
                              celebrities and several top corporate
                              organizations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="teacher-card">
                        <div className="teacher-gray-card">
                          <div className="teacher-img-container">
                            <img className="box" src="img/teacher.png" alt="" />
                            <div className="box stack-top" />
                          </div>
                          <div className="col-lg-3 teacher-name">
                            <h4>Zora</h4>
                          </div>
                          <div className="col-lg-9">
                            <p>
                              Ashrei Mitra started his journey in yoga at the
                              age of 16. He was chosen by his master Dr. Bharat
                              Thakur from a meditation workshop and has worked
                              with him closely for many years to become one of
                              the most senior teachers at Bharat Thakur Artistic
                              Yoga. Combining his love of fitness, breathwork,
                              functional training, and his deep knowledge of the
                              human anatomy and yogic knowhow, he is committed
                              to maximizing on the human potential by
                              strengthening and opening up the body so that the
                              mind naturally falls into a deep state of
                              relaxation and meditation. He has taught yoga to
                              people from all walks of life including athletes,
                              celebrities and several top corporate
                              organizations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="teacher-card">
                        <div className="teacher-gray-card">
                          <div className="teacher-img-container">
                            <img className="box" src="img/teacher.png" alt="" />
                            <div className="box stack-top" />
                          </div>
                          <div className="col-lg-3 teacher-name">
                            <h4>Ashrei Mitra</h4>
                          </div>
                          <div className="col-lg-9">
                            <p>
                              Ashrei Mitra started his journey in yoga at the
                              age of 16. He was chosen by his master Dr. Bharat
                              Thakur from a meditation workshop and has worked
                              with him closely for many years to become one of
                              the most senior teachers at Bharat Thakur Artistic
                              Yoga. Combining his love of fitness, breathwork,
                              functional training, and his deep knowledge of the
                              human anatomy and yogic knowhow, he is committed
                              to maximizing on the human potential by
                              strengthening and opening up the body so that the
                              mind naturally falls into a deep state of
                              relaxation and meditation. He has taught yoga to
                              people from all walks of life including athletes,
                              celebrities and several top corporate
                              organizations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );}
};

