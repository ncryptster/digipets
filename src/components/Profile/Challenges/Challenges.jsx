import React from "react";
import Heading from "../Heading/Heading";
import "./Challenges.css";
import Challenge from "../Challenge/Challenge";

const Challenges = (props) => {
  return (
    <div className="challenges">
      <Heading bgcolor="blue" txcolor="white" text="Challenges" />
      <div className="challengesContainer">
        <div className="challengeRow">
          <div className="col">
            {" "}
            <Challenge
              picture="easterEgg"
              text="Pixel Eggs"
              challengeValue={props.user.challenges.eggs}
            />
            <Challenge
              picture="epicScroll"
              text="Epic Scrolls"
              challengeValue={props.user.challenges.scrolls}
            />
          </div>
          <div className="col">
            <Challenge
              picture="emblems"
              text="Multiverse Emblems"
              challengeValue={props.user.challenges.emblems}
            />
            <Challenge
              picture="faction"
              text="Factions Decals"
              challengeValue={props.user.challenges.decals}
            />
          </div>
          <div className="col">
            <Challenge
              picture="gauntlet"
              text="Gauntlet Level"
              challengeValue={props.user.challenges.gauntlet}
            />
            <Challenge
              picture="ranking"
              text="MetaRank"
              challengeValue={props.user.challenges.rank}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
