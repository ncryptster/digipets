import React from 'react';
import "./UserLinks.css"
import { GiHangingSign, GiBangingGavel, GiScrollQuill, GiMailbox, GiThreeFriends } from 'react-icons/gi'

const UserLinks = () => {
	return (
		<div className="linksContainer">
			<div className="linkContainer">
				<div className="linkIcon">< GiHangingSign /></div>
				<div className="linkName">Trades</div>
			</div>
			<div className="linkContainer">
				<div className="linkIcon"><GiBangingGavel/></div>
				<div className="linkName">Auctions</div>
			</div>
			<div className="linkContainer">
				<div className="linkIcon"> <GiScrollQuill /> </div>
				<div className="linkName">Wishlist</div>
			</div>
			<div className="linkContainer">
				<div className="linkIcon"> <GiMailbox /></div>
				<div className="linkName">MultiMail</div>
			</div>
			<div className="linkContainer">
				<div className="linkIcon"> <GiThreeFriends /></div>
				<div className="linkName">MultiFriends</div>
			</div>
		</div>
	);
}

export default UserLinks;
