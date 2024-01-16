import React, { useState } from "react";
// import "../StyleCSS/OurProgram.css";
import Programs from "./Programs.json";
 import city from "countries-and-timezones";
import moment from "moment";
// import { isArray } from "react-select/dist/declarations/src/utils";

 
var count = {"IN": "INDIA", "AE": "United Arab Emirates", "US": "United States of America", }
var aryIannaTimeZones = [
  "Europe/Andorra",
  "Asia/Dubai",
  "Asia/Kabul",
  "Europe/Tirane",
  "Asia/Yerevan",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  "Antarctica/Mawson",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Cordoba",
  "America/Argentina/Salta",
  "America/Argentina/Jujuy",
  "America/Argentina/Tucuman",
  "America/Argentina/Catamarca",
  "America/Argentina/La_Rioja",
  "America/Argentina/San_Juan",
  "America/Argentina/Mendoza",
  "America/Argentina/San_Luis",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Ushuaia",
  "Pacific/Pago_Pago",
  "Europe/Vienna",
  "Australia/Lord_Howe",
  "Antarctica/Macquarie",
  "Australia/Hobart",
  "Australia/Currie",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Australia/Broken_Hill",
  "Australia/Brisbane",
  "Australia/Lindeman",
  "Australia/Adelaide",
  "Australia/Darwin",
  "Australia/Perth",
  "Australia/Eucla",
  "Asia/Baku",
  "America/Barbados",
  "Asia/Dhaka",
  "Europe/Brussels",
  "Europe/Sofia",
  "Atlantic/Bermuda",
  "Asia/Brunei",
  "America/La_Paz",
  "America/Noronha",
  "America/Belem",
  "America/Fortaleza",
  "America/Recife",
  "America/Araguaina",
  "America/Maceio",
  "America/Bahia",
  "America/Sao_Paulo",
  "America/Campo_Grande",
  "America/Cuiaba",
  "America/Santarem",
  "America/Porto_Velho",
  "America/Boa_Vista",
  "America/Manaus",
  "America/Eirunepe",
  "America/Rio_Branco",
  "America/Nassau",
  "Asia/Thimphu",
  "Europe/Minsk",
  "America/Belize",
  "America/St_Johns",
  "America/Halifax",
  "America/Glace_Bay",
  "America/Moncton",
  "America/Goose_Bay",
  "America/Blanc-Sablon",
  "America/Toronto",
  "America/Nipigon",
  "America/Thunder_Bay",
  "America/Iqaluit",
  "America/Pangnirtung",
  "America/Atikokan",
  "America/Winnipeg",
  "America/Rainy_River",
  "America/Resolute",
  "America/Rankin_Inlet",
  "America/Regina",
  "America/Swift_Current",
  "America/Edmonton",
  "America/Cambridge_Bay",
  "America/Yellowknife",
  "America/Inuvik",
  "America/Creston",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Dawson",
  "Indian/Cocos",
  "Europe/Zurich",
  "Africa/Abidjan",
  "Pacific/Rarotonga",
  "America/Santiago",
  "America/Punta_Arenas",
  "Pacific/Easter",
  "Asia/Shanghai",
  "Asia/Urumqi",
  "America/Bogota",
  "America/Costa_Rica",
  "America/Havana",
  "Atlantic/Cape_Verde",
  "America/Curacao",
  "Indian/Christmas",
  "Asia/Nicosia",
  "Asia/Famagusta",
  "Europe/Prague",
  "Europe/Berlin",
  "Europe/Copenhagen",
  "America/Santo_Domingo",
  "Africa/Algiers",
  "America/Guayaquil",
  "Pacific/Galapagos",
  "Europe/Tallinn",
  "Africa/Cairo",
  "Africa/El_Aaiun",
  "Europe/Madrid",
  "Africa/Ceuta",
  "Atlantic/Canary",
  "Europe/Helsinki",
  "Pacific/Fiji",
  "Atlantic/Stanley",
  "Pacific/Chuuk",
  "Pacific/Pohnpei",
  "Pacific/Kosrae",
  "Atlantic/Faroe",
  "Europe/Paris",
  "Europe/London",
  "Asia/Tbilisi",
  "America/Cayenne",
  "Africa/Accra",
  "Europe/Gibraltar",
  "America/Godthab",
  "America/Danmarkshavn",
  "America/Scoresbysund",
  "America/Thule",
  "Europe/Athens",
  "Atlantic/South_Georgia",
  "America/Guatemala",
  "Pacific/Guam",
  "Africa/Bissau",
  "America/Guyana",
  "Asia/Hong_Kong",
  "America/Tegucigalpa",
  "America/Port-au-Prince",
  "Europe/Budapest",
  "Asia/Jakarta",
  "Asia/Pontianak",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Europe/Dublin",
  "Asia/Jerusalem",
  "Asia/Kolkata",
  "Indian/Chagos",
  "Asia/Baghdad",
  "Asia/Tehran",
  "Atlantic/Reykjavik",
  "Europe/Rome",
  "America/Jamaica",
  "Asia/Amman",
  "Asia/Tokyo",
  "Africa/Nairobi",
  "Asia/Bishkek",
  "Pacific/Tarawa",
  "Pacific/Enderbury",
  "Pacific/Kiritimati",
  "Asia/Pyongyang",
  "Asia/Seoul",
  "Asia/Almaty",
  "Asia/Qyzylorda",
  "Asia/Qostanay", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  "Asia/Aqtobe",
  "Asia/Aqtau",
  "Asia/Atyrau",
  "Asia/Oral",
  "Asia/Beirut",
  "Asia/Colombo",
  "Africa/Monrovia",
  "Europe/Vilnius",
  "Europe/Luxembourg",
  "Europe/Riga",
  "Africa/Tripoli",
  "Africa/Casablanca",
  "Europe/Monaco",
  "Europe/Chisinau",
  "Pacific/Majuro",
  "Pacific/Kwajalein",
  "Asia/Yangon",
  "Asia/Ulaanbaatar",
  "Asia/Hovd",
  "Asia/Choibalsan",
  "Asia/Macau",
  "America/Martinique",
  "Europe/Malta",
  "Indian/Mauritius",
  "Indian/Maldives",
  "America/Mexico_City",
  "America/Cancun",
  "America/Merida",
  "America/Monterrey",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Chihuahua",
  "America/Ojinaga",
  "America/Hermosillo",
  "America/Tijuana",
  "America/Bahia_Banderas",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Africa/Maputo",
  "Africa/Windhoek",
  "Pacific/Noumea",
  "Pacific/Norfolk",
  "Africa/Lagos",
  "America/Managua",
  "Europe/Amsterdam",
  "Europe/Oslo",
  "Asia/Kathmandu",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Auckland",
  "Pacific/Chatham",
  "America/Panama",
  "America/Lima",
  "Pacific/Tahiti",
  "Pacific/Marquesas",
  "Pacific/Gambier",
  "Pacific/Port_Moresby",
  "Pacific/Bougainville",
  "Asia/Manila",
  "Asia/Karachi",
  "Europe/Warsaw",
  "America/Miquelon",
  "Pacific/Pitcairn",
  "America/Puerto_Rico",
  "Asia/Gaza",
  "Asia/Hebron",
  "Europe/Lisbon",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Pacific/Palau",
  "America/Asuncion",
  "Asia/Qatar",
  "Indian/Reunion",
  "Europe/Bucharest",
  "Europe/Belgrade",
  "Europe/Kaliningrad",
  "Europe/Moscow",
  "Europe/Simferopol",
  "Europe/Kirov",
  "Europe/Astrakhan",
  "Europe/Volgograd",
  "Europe/Saratov",
  "Europe/Ulyanovsk",
  "Europe/Samara",
  "Asia/Yekaterinburg",
  "Asia/Omsk",
  "Asia/Novosibirsk",
  "Asia/Barnaul",
  "Asia/Tomsk",
  "Asia/Novokuznetsk",
  "Asia/Krasnoyarsk",
  "Asia/Irkutsk",
  "Asia/Chita",
  "Asia/Yakutsk",
  "Asia/Khandyga",
  "Asia/Vladivostok",
  "Asia/Ust-Nera",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Asia/Kamchatka",
  "Asia/Anadyr",
  "Asia/Riyadh",
  "Pacific/Guadalcanal",
  "Indian/Mahe",
  "Africa/Khartoum",
  "Europe/Stockholm",
  "Asia/Singapore",
  "America/Paramaribo",
  "Africa/Juba",
  "Africa/Sao_Tome",
  "America/El_Salvador",
  "Asia/Damascus",
  "America/Grand_Turk",
  "Africa/Ndjamena",
  "Indian/Kerguelen",
  "Asia/Bangkok",
  "Asia/Dushanbe",
  "Pacific/Fakaofo",
  "Asia/Dili",
  "Asia/Ashgabat",
  "Africa/Tunis",
  "Pacific/Tongatapu",
  "Europe/Istanbul",
  "America/Port_of_Spain",
  "Pacific/Funafuti",
  "Asia/Taipei",
  "Europe/Kiev",
  "Europe/Uzhgorod",
  "Europe/Zaporozhye",
  "Pacific/Wake",
  "America/New_York",
  "America/Detroit",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Indiana/Indianapolis",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Vevay",
  "America/Chicago",
  "America/Indiana/Tell_City",
  "America/Indiana/Knox",
  "America/Menominee",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/North_Dakota/Beulah",
  "America/Denver",
  "America/Boise",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "Pacific/Honolulu",
  "America/Montevideo",
  "Asia/Samarkand",
  "Asia/Tashkent",
  "America/Caracas",
  "Asia/Ho_Chi_Minh",
  "Pacific/Efate",
  "Pacific/Wallis",
  "Pacific/Apia",
  "Africa/Johannesburg",
];

const OurProgram = () => {
  const [country, setCountry] = useState("AE");
  const user = JSON.parse(localStorage.getItem("UserDetails"));
  let latestTime = new Date();

  const handleDisplayTime = (time) => {
    if (country === 'Dubai') {
      return time
    }

    const msTime = time.split(" ")
    const ms = msTime[0].split(":")
    let mss = 0;
    if(msTime[1] === "AM"){
    mss = ms[0] * 60 * 60 + ms[1] * 60  
    console.log("AM",mss)
    } else {
     mss = (ms[0] + 12) * 60 * 60 + ms[1] * 60 ;
     console.log("PM",mss);
    }

    const UTCDiff = Programs.country['Dubai']  * 60 * 60 ;
    mss = mss - UTCDiff;

    const newCountry = Programs.country[country];
    //check if time is in -ve or +ve
    const minInNew = newCountry.split(".") || newCountry;
    //const newCountryGMT = isArray(minInNew) ? minInNew[0] * 60 * 60 + minInNew[1] * 60 : minInNew * 60 *60;




  }

  const eventHandle = (e) => {
    setCountry(e.target.value);

  };

  const convertTimeToMinutesFromMidNight = (timeInString) => {
    var spliTimes = timeInString.split(" ");
    var addToMinutes = 0;
    var horsMinsArray = spliTimes[0].split(":");
    var timeinhrs = horsMinsArray[0];
    var timeinMins = horsMinsArray[1];
    if (spliTimes[spliTimes.length - 1] == "AM") {
      timeinhrs = timeinhrs != 12 ? timeinhrs : 0;
    } else {
      addToMinutes = 720;
    }

    var totalTimeInMins = timeinhrs * 60 + parseInt(timeinMins);

    var timeInMinsFromMidnight = totalTimeInMins + addToMinutes;
    return timeInMinsFromMidnight;
  };

  const convertMinutesFromMidNightToTime = (timeInmIns, timeInString) => {
    var isAM = true;
    if (timeInmIns > 720 || timeInmIns < 0) {
      isAM = false;
      timeInmIns = timeInmIns > 0 ? timeInmIns - 720 : 1440 + timeInmIns;
      timeInmIns = timeInmIns > 720 ? timeInmIns -720 : timeInmIns;
    }
    // var spliTimes = timeInString.split(" ");
    // if (spliTimes[spliTimes.length - 1] == "AM" && timeInmIns < 60) {
    //   timeInmIns = timeInmIns + 720;
    // }
    console.log("new tital time in sminutes");
    console.log(timeInmIns);
    var timinhrs = timeInmIns / 60;
    timinhrs = Math.floor(timinhrs);
    var timeInMinutes = timeInmIns - timinhrs * 60;
    timeInMinutes = timeInMinutes < 10 ? '0' + timeInMinutes : timeInMinutes;
    var timeInString = timinhrs + ":" + timeInMinutes + " AM";
    if (!isAM) {
      timeInString = timinhrs + ":" + timeInMinutes + " PM";
    }
    console.log("Converted time in String");
    console.log(timeInString);
    return timeInString;
  };

  const showNewTime = (time) => {
    if (country === 'AE') {
      return time;
    }
    const currentTimeZone = Programs.countries['AE'].timezone;
    console.log(country); 
    const newTimeZone = Programs.countries[country].timezone;
    const timeDiff = newTimeZone - currentTimeZone;
          var timeInMinsFromMidnight = convertTimeToMinutesFromMidNight(time);
          console.log("Time In Mins From MidNight");
          console.log(timeInMinsFromMidnight);
          var displayTime = timeInMinsFromMidnight + timeDiff;

          displayTime = convertMinutesFromMidNightToTime(displayTime, time);
          //value.time = value.displayTime;
    return displayTime;
  };

  return (
    <>
      <div className="container our-programs">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-4">Our Programs</h3>
          <select
            value={country}
            defaultValue="Select your timezone"
            onChange={eventHandle}
            className="form-select timezone-select"
          >
            <option
              className="ourprogram_select"
              value="Select your timezone"
              selected
              disabled
              hidden
            >
              Select your timezone
            </option>
            {Object.keys(Programs.countries).map((item, index) => {
              return (
                <option key={index} value={item}>
                  {Programs.countries[item].country}
                </option>
              );
            })}
          </select>
        </div>
        <div className="swiper-container d-block d-lg-none">
          <ul className="nav nav-tabs swiper-wrapper" role="tablist">
            <li className="nav-item swiper-slide" role="presentation">
              <button
                className="nav-link active"
                id="red-tab"
                data-bs-toggle="tab"
                data-bs-target="#red"
                type="button"
                role="tab"
                aria-controls="red"
                aria-selected="true"
              >
                <p>RED</p>
              </button>
            </li>
            <li className="nav-item swiper-slide" role="presentation">
              <button
                className="nav-link"
                id="classic-tab"
                data-bs-toggle="tab"
                data-bs-target="#classic"
                type="button"
                role="tab"
                aria-controls="classic"
                aria-selected="false"
              >
                <p>Classic</p>
              </button>
            </li>
            <li className="nav-item swiper-slide" role="presentation">
              <button
                className="nav-link"
                id="personal-tab"
                data-bs-toggle="tab"
                data-bs-target="#personal"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <p>Personal Training</p>
              </button>
            </li>
            <li className="nav-item swiper-slide" role="presentation">
              <button
                className="nav-link"
                id="meditation-tab"
                data-bs-toggle="tab"
                data-bs-target="#meditation"
                type="button"
                role="tab"
                aria-controls="meditation"
                aria-selected="false"
              >
                <p>Meditation</p>
              </button>
            </li>
            <li className="nav-item swiper-slide" role="presentation">
              <button
                className="nav-link"
                id="super-tab"
                data-bs-toggle="tab"
                data-bs-target="#super"
                type="button"
                role="tab"
                aria-controls="super"
                aria-selected="false"
              >
                <p>SuperFAST</p>
              </button>
            </li>
            <li className="nav-item swiper-slide" role="presentation">
              <button
                className="nav-link"
                id="corporate-tab"
                data-bs-toggle="tab"
                data-bs-target="#corporate"
                type="button"
                role="tab"
                aria-controls="corporate"
                aria-selected="false"
              >
                <p>Corporate Training</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-block">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="red-tab"
                data-bs-toggle="tab"
                data-bs-target="#red"
                type="button"
                role="tab"
                aria-controls="red"
                aria-selected="true"
              >
                <p>RED</p>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="classic-tab"
                data-bs-toggle="tab"
                data-bs-target="#classic"
                type="button"
                role="tab"
                aria-controls="classic"
                aria-selected="false"
              >
                <p>Classic</p>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="meditation-tab"
                data-bs-toggle="tab"
                data-bs-target="#meditation"
                type="button"
                role="tab"
                aria-controls="meditation"
                aria-selected="false"
              >
                <p>Meditation</p>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="personal-tab"
                data-bs-toggle="tab"
                data-bs-target="#personal"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <p>Personal Training</p>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="super-tab"
                data-bs-toggle="tab"
                data-bs-target="#super"
                type="button"
                role="tab"
                aria-controls="super"
                aria-selected="false"
              >
                <p>SuperFAST</p>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="corporate-tab"
                data-bs-toggle="tab"
                data-bs-target="#corporate"
                type="button"
                role="tab"
                aria-controls="corporate"
                aria-selected="false"
              >
                <p>Corporate Training</p>
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          {Programs.data.map((item, index) => {
            let bottom;
            if (item.batches != null) {
              bottom = (
                <div
                  className="row bottom"
                  style={{
                    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
                    paddingTop: "2rem",
                    width: "100%",
                  }}
                >
                  <p>
                    <strong>Timings</strong> (1hour)
                  </p>
                  <div className="india timings d-block">
                    {item.batches.map((value, index) => {
                      
                         //const disDate = latestTime.toLocaleTimeString('en-US', { timeZone:country});
                          //const timeSplit = disDate.split(" ");
                          //const convertedTime = timeSplit[0].split(":");
                          //console.log(convertedTime)
                          const displayTime = showNewTime(value.time)
                          
                           

                      return (
                        
                        <>
                          <span className="badge rounded-pill timing-badge">
                            {displayTime}
                          </span>
                          <span className="badge rounded-pill timing-badge ladies">
                            {value.isLadiesBatch}
                          </span>

                          {/* <span key={index} className="badge rounded-pill timing-badge">
                                  {`${convertedTime[0]}:${convertedTime[1]} ${timeSplit[1]}`}
                                </span> */}
                        </>
                      );
                    })}
                  </div>
                  <div className="ladies-only">
                    <span>
                      <i className="fas fa-square" />
                      Ladies only
                      <p />
                    </span>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={index}
                className={`tab-pane fade ${item.show} ${item.active}`}
                id={item.id}
                role="tabpanel"
                aria-labelledby={item.labelledby}
              >
                <div className="programs-card p-lg-4 p-0">
                  <div className="row top" style={{ borderBottom: "none" }}>
                    <div
                      className="col-lg-3"
                      style={{
                        justifyContent: "flex-end",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img src={item.image} style={{height:item.imageProps?.height,width:item.imageProps?.width}} />
                    </div>
                    <div className="col-lg-9">
                      <h4>{item.name}</h4>
                      <p className="type">{item.type}</p>
                      <p className="description">{item.desc}</p>
                      
                    </div>
                  </div>
                  
                  <a href={`https://wa.me/919953822945?text=Hi%20I%20am%20interested%20in%20joining%20the%20${item?.id}%20program.%20Can%20you%20please%20share%20more%20details.%20Thanks%20${user!==null ? user?.firstName.split(" ")[0]:""}`} target="_blank" className="book-now">
                    <span>
                      <i className="fab fa-whatsapp me-2" />
                      Book Now
                    </span>
                  </a>

                  {bottom}
                </div>
              </div>
            );
          })}

          {/* // console.log(country);
          // const todayDate = new Date()
          // const t = new Date().getTimezoneOffset()
          // console.log(t)

          // const internationalTime = new Intl.DateTimeFormat(country).format(todayDate)
          // console.log(internationalTime) */}

          {/* <div className="tab-pane fade" id="classic" role="tabpanel" aria-labelledby="classic-tab">
            <div className="programs-card p-lg-4 p-0">
              <div className="row top">
                <div className="col-lg-3">
                  <img src="img/programs/classic.png" />
                </div>
                <div className="col-lg-9">
                  <h4>Classic</h4>
                  <p className="type">App and Zoom</p>
                  <p className="description">
                    Our 1-hour body part format that works on a specific body part to
                    give
                    you
                    optimum
                    results while also giving you a balanced combination of postures
                    (asanas),
                    breathing
                    (pranayama), cleansing (Kriyas) and neuromuscular locks (bandhas) so
                    that
                    you get a
                    complete workout that leaves you rejuvenated and stress free. This
                    is
                    the
                    ultimate
                    program to make steady progress on a physical level while also
                    working
                    on
                    subtler
                    aspects of your mind. Expect yourself to look and feel younger, and
                    generally feel
                    happy throughout the day for no reason !
                  </p>
                  <a href className="book-now">
                    <span>
                      <i className="fab fa-whatsapp me-2" />
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
              <div className="row bottom">
                <p><strong>Timings</strong> (1hour)</p>
                <div className="india timings d-block">
                  <span className="badge rounded-pill timing-badge">5:30AM</span>
                  <span className="badge rounded-pill timing-badge">5:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">5:30AM</span>
                </div>
                <div className="usa timings d-none">
                  <span className="badge rounded-pill timing-badge">12:30AM</span>
                  <span className="badge rounded-pill timing-badge">12:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">12:30AM</span>
                </div>
                <div className="europe timings d-none">
                  <span className="badge rounded-pill timing-badge">8:30AM</span>
                  <span className="badge rounded-pill timing-badge">8:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">8:30AM</span>
                </div>
                <div className="ladies-only">
                  <span>
                    <i className="fas fa-square" />
                    Ladies only<p />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="tab-pane fade" id="personal" role="tabpanel" aria-labelledby="personal-tab">
            <div className="programs-card p-lg-4 p-0">
              <div className="row top" style={{borderBottom: 'none'}}>
                <div className="col-lg-3">
                  <img src="img/programs/personal.png" />
                </div>
                <div className="col-lg-9">
                  <h4>Personal Training</h4>
                  <p className="type">Zoom class / On premise</p>
                  <p className="description">
                    If you’re looking for a yoga program that is completely customized
                    to
                    your
                    requirements, needs and moods, then look no further than our 1 on 1
                    sessions
                    that can be done in the comfort of your home or via Zoom.
                  </p>
                  <p className="description">
                    These sessions are designed to address your specific health needs
                    like
                    high
                    blood pressure, diabetes, etc. or simply to enjoy the perfect yoga
                    class
                    that can either relax you when you are stressed, energise you when
                    you
                    are
                    feeling lethargic or simply give you an amazing workout. Our
                    instructors
                    are
                    constantly responding to you and how far they can take you on your
                    journey
                    of yoga and fitness.
                  </p>
                  <a href className="book-now">
                    <span>
                      <i className="fab fa-whatsapp me-2" />
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="tab-pane fade" id="meditation" role="tabpanel" aria-labelledby="meditation-tab">
            <div className="programs-card p-lg-4 p-0">
              <div className="row top">
                <div className="col-lg-3">
                  <img src="img/programs/meditation.png" />
                </div>
                <div className="col-lg-9">
                  <h4>Meditation &amp; Stress Relief</h4>
                  <p className="type">Zoom class / On premise </p>
                  <p className="description">
                    A 40-minute program designed to reduce stress levels, boost good
                    hormones
                    and release day-to-day tiredness. Feel relaxed and fresh. Spend some
                    time
                    with yourself exploring your inner world, discovering the power of
                    your
                    breath and unlocking the hidden powers that exist in all of us. Life
                    is
                    a
                    mirror and if you wish to see a change then all you have to do is
                    make a
                    change from within. We use ancient and powerful techniques that
                    bring
                    about
                    a true transformation. This affects you at every level - mentally,
                    emotionally and spiritually. Get out of your dopamine addictions
                    that
                    drain
                    you by the end of every day and leave you feeling low and tired.
                    Find your way to inner peace, better relationships and true
                    happiness
                    that
                    becomes the foundation of your life.
                  </p>
                  <a href className="book-now">
                    <span>
                      <i className="fab fa-whatsapp me-2" />
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
              <div className="row bottom">
                <p><strong>Timings</strong> (1hour)</p>
                <div className="india timings d-block">
                  <span className="badge rounded-pill timing-badge">5:30AM</span>
                  <span className="badge rounded-pill timing-badge">5:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">5:30AM</span>
                </div>
                <div className="usa timings d-none">
                  <span className="badge rounded-pill timing-badge">12:30AM</span>
                  <span className="badge rounded-pill timing-badge">12:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">12:30AM</span>
                </div>
                <div className="europe timings d-none">
                  <span className="badge rounded-pill timing-badge">8:30AM</span>
                  <span className="badge rounded-pill timing-badge">8:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">8:30AM</span>
                </div>
                <div className="ladies-only">
                  <span>
                    <i className="fas fa-square" />
                    Ladies only<p />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="tab-pane fade" id="super" role="tabpanel" aria-labelledby="super-tab">
            <div className="programs-card p-lg-4 p-0">
              <div className="row top">
                <div className="col-lg-3">
                  <img src="img/programs/super.png" />
                </div>
                <div className="col-lg-9">
                  <h4>SuperFAST</h4>
                  <p className="type">Zoom class</p>
                  <p className="description">
                    A 30-day Yoga blast!
                    Lose up to 15 kgs (35 lbs) in 30 days. (Our average is around 7-8
                    kgs
                    however). Boost your metabolism, fix your digestive system,
                    supercharge
                    your
                    health and happiness with our comprehensive SuperFAST program that
                    includes
                    diet, meditation and an 80-minute class daily. This highly
                    effective,
                    all
                    natural and power packed formula is one of our most popular programs
                    that
                    works hard and works fast to give you unbelievable results in no
                    time.
                    That’s why we called it SuperFAST!
                  </p>
                  <a href className="book-now">
                    <span>
                      <i className="fab fa-whatsapp me-2" />
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
              <div className="row bottom">
                <p><strong>Timings</strong> (1hour)</p>
                <div className="india timings d-block">
                  <span className="badge rounded-pill timing-badge">5:30AM</span>
                  <span className="badge rounded-pill timing-badge">5:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">5:30AM</span>
                </div>
                <div className="usa timings d-none">
                  <span className="badge rounded-pill timing-badge">12:30AM</span>
                  <span className="badge rounded-pill timing-badge">12:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">12:30AM</span>
                </div>
                <div className="europe timings d-none">
                  <span className="badge rounded-pill timing-badge">8:30AM</span>
                  <span className="badge rounded-pill timing-badge">8:30AM</span>
                  <span className="badge rounded-pill timing-badge ladies">8:30AM</span>
                </div>
                <div className="ladies-only">
                  <span>
                    <i className="fas fa-square" />
                    Ladies only<p />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="tab-pane fade" id="corporate" role="tabpanel" aria-labelledby="corporate-tab">
            <div className="programs-card p-lg-4 p-0">
              <div className="row top" style={{borderBottom: 'none'}}>
                <div className="col-lg-3">
                  <img src="img/programs/corporate.png" />
                </div>
                <div className="col-lg-9">
                  <h4>Corporate Training</h4>
                  <p className="type">Zoom class / On premise</p>
                  <p className="description">
                    In today’s world, yoga is useful. But for the corporate world we
                    believe
                    yoga is a necessity. Prominent leaders in every field swear on the
                    benefits
                    of yoga and meditation and the last few decades has proven this in
                    many
                    ways. Be it decision making or innovation or productivity, our
                    programs
                    can
                    improve the physical and mental states of any person who devotes
                    just a
                    few
                    minutes in a day.
                  </p>
                  <p className="description">
                    This is a customised yoga module aimed at creating a high energy,
                    creative,
                    fit and more productive work force that is more capable of
                    performing
                    well
                    in all areas and under stressful situations. Our modules are simple
                    and
                    easy
                    to follow and our trainers are motivated to teach your employees
                    easy
                    and
                    effective ways to combat fatigue, back pain, neck problems, stress
                    and
                    the
                    many problems facing the corporate world.
                  </p>
                  <a href className="book-now">
                    <span>
                      <i className="fab fa-whatsapp me-2" />
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div class="container our-programs">
      <h3 class="my-5">Our Programs</h3>
      <div class="row">
        <div class="col-lg-5">
          <img src="img/products.png" alt="" />
        </div>
        <div class="col-lg-7">
          <div class="row pb-lg-3">
            <div class="col-lg-6">
              <img src="img/products.png" alt="" />
            </div>
            <div class="col-lg-6">
              <img src="img/products.png" alt="" />
            </div>
          </div>
          <div class="row pt-lg-3">
            <div class="col-lg-6">
              <img src="img/products.png" alt="" />
            </div>
            <div class="col-lg-6">
              <img src="img/products.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default OurProgram;
