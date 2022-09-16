import React from 'react';
import './App.css';
import {Navbar, Getdata} from './components/Navbardata'
// import {Getdata} from './components/Navbardata'
import Footer from './components/Footer';
import Home from './components/Home';
import NotesCard from './components/NotesCard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>

      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allnotes" element={<NotesCard />} />
        </Routes>
        {/* <Navbar /> */}
        <Getdata />
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default App;
