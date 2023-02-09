import React, { useState } from 'react'
import "../styles/search.css";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const videos = [
    { name: "ValleyBiker", sport: "Race" },
    { name: "Mountainbiker", sport: "Race" },
  ]
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    videos.filter((video) => {
      return video.name.match(searchInput);
    });
  }

  return <div id="search">
    <input
      className="searchBar"
      type="search"
      placeholder='Search for videos'

      onChange={handleChange}
      value={searchInput}
    />
    <button className='search_button'>
      <i className="fa fa-search"></i>
    </button>
  </div>
};
export default Searchbar;