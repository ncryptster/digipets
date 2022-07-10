import React from "react";
import "./Details.css"

const Details = (props) => {
  const text = props.user.hobbies.join()
  return (
    <div className="detailsCard">
      <div className="userdeets">
        <div className="eachdeet">Name: <span>{props.user.username}</span></div>
        <div className="eachdeet">Gender: <span>{props.user.gender}</span></div>
        <div className="eachdeet">Country: <span>{props.user.country}</span></div>
      </div>
      <div className="dateswindow">
        {/* TODO Make the last spotter a function to make a sarcastic ish remark about how long the user has been away. */}
        <div className="eachdeet">Last Spotted: <span>{props.user.lastlogin}</span> </div>
        <div className="eachdeet">Started Playing: <span>{props.user.createdat}</span></div>
      </div>
      <div className="hobbies">
        <div className="eachdeet">Hobbies: <span>{text}</span></div>
      </div>
      <div className="guild">
       <div className="eachdeet">Guild: <span>{props.user.guild.position}</span> in <a href="!#">{props.user.guild.guildName}</a> </div>
      </div>
    </div>
  );
};

export default Details;
