import './App.css';
import React from "react";
import Video from './component/youtube';
import Navbar from './component/nav';
import Nav from './component/uppernav';
import Searchbar from './component/search';
import Latestvideo from './component/videos'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Navbar />
      <Searchbar/>
      <Video/>
      <Latestvideo/>
      <Footer/>
    </div>
  );
}

export default App;
