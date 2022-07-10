import React from 'react';
import Userinfo from '../UserInfo/Userinfo'
import "./ProfileWindow.css"
import {FaQuestionCircle} from 'react-icons/fa';
import Challenges from '../Challenges/Challenges';
import Commerce from '../Commerce/Commerce'
import Digipets from '../Digipets/Digipets'


const ProfileWindow = (user) => {
	user = {
		username: "Ncryptster",
		gender: "Mamalian",
		country: "Land of the free and home of the brave",
		lastlogin: "Last Year",
		createdat: "Many Moons Ago",
		hobbies: ["React", "Nostaglia Machines", "Creating Meaningful Community"],
		guild: {
			position: "Hobbit",
			guildName: "The one guild to rule them all"
		},
		challenges: {
			eggs: 1,
			scrolls: 3,
			emblems: 1,
			decals: 4,
			gauntlet: 11,
			rank: 69 
		},
		digipets : [ 'Formon', 'Tomon' ]

	}
	return (
		<>
		<div className="profileWindowHeader">
			<header className="userlookup" >
				Username: {user.username} <span><FaQuestionCircle /></span>
			</header>
		</div>
		<div className="profileWindowBody">
			<Userinfo user = {user} />
			<Challenges user= {user} />
			<Commerce user={user}/>
			<Digipets user={user}/>
			{/* <Home user={user}/> */}
		</div>	
		
		</>
	);
}

export default ProfileWindow;
