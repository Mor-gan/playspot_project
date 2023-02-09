import React, { useState, useEffect } from "react";
import ExploreVideoBox from "./videobox";

const Latestvideo = () => {
    //  SETTING THE DATA IN A STATE OF ZERO
    const [selectedOption, setSelectedOption] = useState(0)
    // NAVIGATION FUNCTION
    const handleNavigation = (e) => {
        e.preventDefault()
        setSelectedOption()
    }
    // LOOPING THROUGH DATA ARRAY WITH MAP METHOD
    const videoList = () => {
        if (selectedOption && selectedOption.videos.length > 0) {
            return selectedOption.videos.map((item) => {
                return <ExploreVideoBox key={item._id} data={item} />
            })
        }
    }
    // CALLING THE API WITH USEEFFECT HOOKE
    useEffect(() => {
        fetch('http://localhost:8100/api')
            .then(response => response.json())
            .then(data => setSelectedOption(data));
    }, []);
    return (
        <>
            <h1>LATEST VIDEOS</h1>
            <div className="container" onClick={(e) => handleNavigation(1, e)} >
                {videoList()}
            </div>
        </>
    )
}

export default Latestvideo
