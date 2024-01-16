import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const AdvaneSearch = ({ auth }) => {
  const [search, setSearch] = useState("");
  const [advanceResults, setAdvanceResults] = useState([]);
  const [trainerList, setTrainerList] = useState([]);
  const [dropdownBenifit, setDropdownBenifit] = useState([]);
  const [dropdownTechnique, setDropdownTechnique] = useState([]);
  const [dropdownHighlight, setDropdownHighlight] = useState([]);
  const [trainers, setTrainers] = useState(null);
  const [benifit, setBenifit] = useState(null);
  const [technique, setTechnique] = useState(null);
  const [highlight, setHighlight] = useState(null);
  // const [calories, setCalories] = useState([100, 1000]);

  useEffect(() => {
    const trainer = async () => {
      const res = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/admin/trainer/list"
      );
      setTrainerList(res.data.data);
    };
    trainer();
  }, []);

  useEffect(() => {
    const benifit = async () => {
      const res = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/admin/benefit/list"
      );
      const serverResponse = res.data.data;

      const dropDownValue = serverResponse.map((response) => ({
        value: response.id,
        label: response.name,
      }));
      setDropdownBenifit(dropDownValue);
    };
    benifit();
  }, []);

  useEffect(() => {
    const technique = async () => {
      const res = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/admin/technique/list"
      );
      const serverResponse = res.data.data;

      const dropDownValue = serverResponse.map((response) => ({
        value: response.id,
        label: response.name,
      }));
      setDropdownTechnique(dropDownValue);
    };
    technique();
  }, []);

  useEffect(() => {
    const highlight = async () => {
      const res = await axios.get(
        "https://artisticyogaikriya.com/ikriya-video-service/admin/highlight/list"
      );
      const serverResponse = res.data.data;

      const dropDownValue = serverResponse.map((response) => ({
        value: response.id,
        label: response.name,
      }));
      setDropdownHighlight(dropDownValue);
    };
    highlight();
  }, []);

  // const play = async () => {
  //   await fetch(
  //     "https://artisticyogaikriya.com/ikriya-video-service/video/advance/search",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${auth}`,
  //       },
  //       body: JSON.stringify({
  //         searchTerm: search,
  //         // trainerName: trainers,
  //         // benefits: benifit,
  //         // technique:technique,
  //         // highlight:highlight,
  //         intensity: null,
  //         minDuration: null,
  //         maxDuration: null,
  //         minCalorie: null,
  //         maxCalorie: null,
  //         pageSize: 20,
  //         pageNo: 0,
  //         deviceId: "",
  //       }),
  //       redirect: "follow",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setAdvanceResults(result.data);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   if (search.length >= 4) {
  //     play();
  //   }
  // }, [search])

  const play1 = async () => {
    await fetch(
      "https://artisticyogaikriya.com/ikriya-video-service/video/advance/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
        body: JSON.stringify({
          searchTerm: search,
          trainerName: trainers,
          benefits: benifit,
          technique: technique,
          highlight: highlight,
          intensity: null,
          minDuration: null,
          maxDuration: null,
          minCalorie: null,
          maxCalorie: null,
          pageSize: 20,
          pageNo: 0,
          deviceId: "",
        }),
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAdvanceResults(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (search.length >= 4) {
      play1();
    }
  }, [search, trainers, benifit, technique, highlight]);

  // console.log(trainerList)
  // console.log(advanceResults)
  // console.log(benifitList);

  const submitChange = (e) => {
    e.preventDefault();
    play1();
  };

  const changes = (event) => {
    console.log(event);
    setTrainers(event);
    // play()
  };

  const handleChangeBenifit = (event) => {
    // console.log(event);
    // play()
    const list1 = event.map((qw) => {
      return qw.label;
    });
    const a = list1.join();
    setBenifit(a);

    console.log(benifit);
  };

  const handleChangeTechnique = (event) => {
    // console.log(event);
    // play()
    const list2 = event.map((qw) => {
      return qw.label;
    });
    const b = list2.join();
    setTechnique(b);

    console.log(technique);
  };

  const handleChangeHighlight = (event) => {
    // console.log(event);
    // play()
    const list3 = event.map((qw) => {
      return qw.label;
    });
    const c = list3.join();
    setHighlight(c);

    console.log(highlight);
  };

  return (
    <div className="advanceSearch">
      <section class="my-5">
        <div className="container-fluid">
          <div class="row">
            <h3 className="searchVideo__heading">
              YOUR <span className="searchVideo__color">VIDEOS</span>{" "}
            </h3>
            <div className="col-1 my-5">
              <button className="searchVideo__btn">Videos</button>
            </div>

            <div className="col-6 my-5">
              <button className="searchVideo__btn">Blogs</button>
            </div>

            <div className="col-3 my-5">
              <form onSubmit={submitChange}>
                <input
                  placeholder="Search Video"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />
                {/* <Select
                // value={selectedOption}
                onChange={handleChangeBenifit}
                isMulti
                options={dropdownBenifit}
              /> */}

                {/* <button type="submit">Search Videos</button> */}
              </form>
            </div>
          </div>

          {search.length >= 4 ? (
            <>
              <div className="row my-5">
                <div className="col-2">
                  <h2>Filter</h2>
                  <hr />
                  <br />
                  <br />
                  <Range
                    marks={{
                      100: "100",
                      1000: "1000",
                    }}
                    min={100}
                    max={1000}
                    defaultValue={[100, 1000]}
                    tipFormatter={(value) => `${value} sec`}
                  />
                  <br />
                  <br />
                  <br />

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Trainer
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {trainerList.map((item) => {
                        return (
                          <>
                            <Dropdown.Item
                              onClick={() => {
                                changes(item.name);
                              }}
                            >
                              {item.name}
                            </Dropdown.Item>
                          </>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>

                  <br />
                  <br />

                  <h4>Benefit</h4>
                  <hr />
                  <Select
                    // value={selectedOption}
                    onChange={handleChangeBenifit}
                    isMulti
                    options={dropdownBenifit}
                  />

                  <br />
                  <br />

                  <h4>Technique</h4>
                  <hr />
                  <Select
                    // value={selectedOption}
                    onChange={handleChangeTechnique}
                    isMulti
                    options={dropdownTechnique}
                  />

                  <br />
                  <br />

                  <h4>highlight</h4>
                  <hr />
                  <Select
                    // value={selectedOption}
                    onChange={handleChangeHighlight}
                    isMulti
                    options={dropdownHighlight}
                  />

                  {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Trainer
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {trainerList.map((item) => {
                    return (
                      <>
                        <Dropdown.Item
                          onClick={() => {
                            setTrainers(item.name);
                          }}
                        >
                          {item.name}
                        </Dropdown.Item>
                      </>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown> */}
                </div>
                <div className="col-9">
                  <div className="row">
                    {auth ? (
                      <>
                        {Object.values(advanceResults).map((item) => {
                          return (
                            <>
                              <div class="col-4 mb-5">
                                <div
                                  //   onClick={() => {
                                  //     press(item);
                                  //   }}
                                  class="card"
                                  style={{ width: "18rem" }}
                                >
                                  <img
                                    src={item.imageUrl}
                                    class="card-img-top"
                                    alt="..."
                                  />
                                  <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">
                                      Some quick example text to build on the
                                      card title and make up the bulk of the
                                      card's content.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </>
                    ) : ""}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default AdvaneSearch;
