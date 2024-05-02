import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Register from './screens/Register';
import Login from './screens/Login'; 
import Landingscreen from './screens/Landingscreen';
import Profilescreen from './screens/Profilescreen';
import Aboutus from './screens/Aboutus';
import Contactus from './screens/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book/:eventid" element={<Bookingscreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landingscreen />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


