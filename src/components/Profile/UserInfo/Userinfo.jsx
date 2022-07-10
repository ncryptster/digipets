import React from 'react';
import Heading from '../Heading/Heading';
import Details from '../Details/Details'
import TrophyCabinet from '../TrophyCabinet/TrophyCabinet'
import UserLinks from '../UserLinks/UserLinks'
import "./UserInfo.css"

const Userinfo = (props) => {
	
	return (
		<div className="userInfo">
			<Heading bgcolor="black" txcolor="white" text="User Info"/>
			<div className="detailsContainer">
			<Details user={props.user}/>
			<TrophyCabinet user={props.user}/>
			</div>
			<UserLinks />
		</div>
	);
}

export default Userinfo;
