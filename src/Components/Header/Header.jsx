import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({type}) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("")
  const [openoption, setOpenOption] = useState(false);

  const handleSearch = ()=>{
    navigate("/hotelList",{state:{destination,option,date}})
  }
  return (
    <div className="header">
      <div className={type=="list"? "headerContiner list":"headerContiner"}>
        <div className="list">
          <div className="listitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="listitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="listitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rents</span>
          </div>
          <div className="listitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="listitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type!=="list"&&<><h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="searchItem">
            <FontAwesomeIcon icon={faBed} className="iconheader" />
            <input
              type="text"
              placeholder="Where are you going"
              className="searchinput"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="searchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="iconheader" />
            <span
              onClick={() => setOpen(!open)}
              className="searchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )} `}</span>
            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}

                className="Date"
              />
            )}
          </div>
          <div className="searchItem">
            <FontAwesomeIcon icon={faPerson} className="iconheader" />
            <span
              className="searchText"
              onClick={() => setOpenOption(!openoption)}
            >{`${option.adult}Adults ${option.children} child ${option.room} room`}</span>
            {openoption && (
              <div className="options">
                <div className="optionItem">
                  <div className="optionText">Adult</div>
                  <div className="optionCounter">
                    <button
                      className="buttonCount"
                      disabled={option.adult <= 1}
                      onClick={() => {
                        setOption((prevState) => {
                          return { ...prevState, adult: prevState.adult - 1 };
                        });
                      }}
                    >
                      -
                    </button>
                    <div className="number">{option.adult}</div>
                    <button
                      className="buttonCount"
                      onClick={() => {
                        setOption((prevState) => {
                          return { ...prevState, adult: prevState.adult + 1 };
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <div className="optionText">Children</div>
                  <div className="optionCounter">
                    <button
                      className="buttonCount"
                      disabled={option.children <= 0}
                      onClick={() => {
                        setOption((prevState) => {
                          return {
                            ...prevState,
                            children: prevState.children - 1,
                          };
                        });
                      }}
                    >
                      -
                    </button>
                    <div className="number">{option.children}</div>
                    <button
                      className="buttonCount"
                      onClick={() => {
                        setOption((prevState) => {
                          return {
                            ...prevState,
                            children: prevState.children + 1,
                          };
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <div className="optionText">Room</div>
                  <div className="optionCounter">
                    <button
                      className="buttonCount"
                      disabled={option.room <= 1}
                      onClick={() => {
                        setOption((prevState) => {
                          return { ...prevState, room: prevState.room - 1 };
                        });
                      }}
                    >
                      -
                    </button>
                    <div className="number">{option.room}</div>
                    <button
                      className="buttonCount"
                      onClick={() => {
                        setOption((prevState) => {
                          return { ...prevState, room: prevState.room + 1 };
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button onClick={handleSearch} className="headerBtn">Search</button>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
