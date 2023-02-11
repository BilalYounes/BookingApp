
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import "./App.css"
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import HotelList from "./Pages/HotelList/HotelList";


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/hotelList" element={<HotelList/>}/>
        <Route exact path="/hotel" element={<Hotel/>}/>

      </Routes>
    </Router>
  );
}


