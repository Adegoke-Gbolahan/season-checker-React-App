import './SeasonDisplay.css'
import React from "react";
const seasonConfig = {
    summer: {
        checkSeason: "Let's hit the the bitch!",
        icon:'sun'
    },
    winter:{
        checkSeason: "Burr, it is chilly!",
        icon:'snowflak'
    }
} 
const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat < 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {checkSeason,icon} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={ `icon-left massive ${icon} icon`} />
            <h1>{checkSeason}</h1>
            <i className={ `icon-right massive ${icon} icon`} />
        </div>    
    )
};

export default SeasonDisplay;