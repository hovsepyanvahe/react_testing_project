import React from "react";

const SeasonDisplay = props => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return (
        <div>Latitude: </div>
    )
};

export default SeasonDisplay;