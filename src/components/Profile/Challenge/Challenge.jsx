import React from 'react';
// import easterEgg from "../../img/easterEgg.svg"
import "./Challenge.css"


const Challenge = (props) => {
	
	return (
    
		<div className="challenge">
            <img className="challengePicture" src={require(`../../../img/${props.picture}.svg`)} alt=""></img>
            <div className="challengeName">{props.text}</div>
            <div className="challengeValue">{props.challengeValue}</div>
          </div>
	);
}

export default Challenge;


