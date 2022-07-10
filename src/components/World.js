import { useState } from "react";
import universe from "../img/universe.png";
import grassland from "../img/grassland.png";
import lavaland from "../img/lavaland.png";
import earf from "../img/earf.png";
import eye from "../img/eye.png";
import shop from "../img/shop.png";
import grasssword from "../img/grasssword.png";
import icebomb from "../img/icebomb.png";
import monster from "../img/monster.png";
import volcano from "../img/volcano.png";
import wheel from "../img/wheel.gif";

function World() {
  const [planet, setPlanet] = useState("universe");
  const [prize, setPrize] = useState("");
  const [food, setFood] = useState("");
  const [spun, setSpun] = useState(false);
  const [volc, setVolc] = useState(false);

  function getRand(x) {
    return Math.floor(Math.random() * x) + 1;
  }

  function spin() {
    let prizes = [
      100, 100, 100, 100, 100, 200, 200, 200, 200, 300, 300, 300, 500, 500,
      1000,
    ];
    let res = getRand(prizes.length) - 1;
    setPrize("You won " + prizes[res] + " points!");
    if (spun === true) {
      setPrize("Thanks for playing! Try again tomorrow");
    }
  }

  function rollVolc() {
    let prizes = [
      "Ham Omelete",
      "Cheesesteak",
      "Yogurt Parfait",
      "Pickled Egg",
    ];
    let res = getRand(prizes.length) - 1;
    setFood(
      "You received a " + prizes[res] + "! Come back tomorrow for more food"
    );
    if (volc === true) {
      setFood("The Gods have already smiled on you today. Try again tomorrow");
    }
  }

  if (planet === "universe") {
    return (
      <div>
        <img src={universe} useMap="#workmap" />
        <map name="workmap">
          <area
            shape="circle"
            coords="170,445,45"
            alt="Lavaland"
            onClick={() => {
              setPlanet("lavaland");
            }}
          />
          <area
            shape="circle"
            coords="368,580,68"
            alt="Earf"
            onClick={() => {
              setPlanet("earf");
            }}
          />
          <area
            shape="circle"
            coords="668,410,28"
            alt="Grassland"
            onClick={() => {
              setPlanet("grassland");
            }}
          />
          <area
            shape="circle"
            coords="488,441,3"
            alt="Eye"
            onClick={() => {
              setPlanet("eye");
            }}
          />
        </map>
      </div>
    );
  }
  if (planet === "lavaland") {
    return (
      <div>
        <img src={lavaland} useMap="#workmap" />
        <map name="workmap">
          <area
            shape="rect"
            coords="400,400,600,500"
            alt="Volcano"
            onClick={() => {
              setPlanet("volcano");
            }}
          />
        </map>
        <br />
        <button
          onClick={() => {
            setPlanet("universe");
          }}
        >
          Back
        </button>
      </div>
    );
  }
  if (planet === "grassland") {
    return (
      <div>
        <img src={grassland} useMap="#workmap" />
        <map name="workmap">
          <area
            shape="rect"
            coords="175,425,520,675"
            alt="Wheel"
            onClick={() => {
              setPlanet("wheel");
            }}
          />
        </map>
        <br />
        <button
          onClick={() => {
            setPlanet("universe");
          }}
        >
          Back
        </button>
      </div>
    );
  }
  if (planet === "earf") {
    return (
      <div>
        <img src={earf} useMap="#workmap" />
        <map name="workmap">
          <area
            shape="rect"
            coords="670,410,780,510"
            alt="Shop"
            onClick={() => {
              setPlanet("shop");
            }}
          />
        </map>
        <br />
        <button
          onClick={() => {
            setPlanet("universe");
          }}
        >
          Back
        </button>
      </div>
    );
  }
  if (planet === "shop") {
    return (
      <div>
        <img src={shop} height="500vh" />
        <br />
        <img src={grasssword} /> Grass Sword ... 5753 points{" "}
        <button>buy</button>
        <br />
        <img src={icebomb} /> Icebomb ... 1367 points <button>buy</button>
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            setPlanet("earf");
          }}
        >
          Back
        </button>
      </div>
    );
  }
  if (planet === "wheel") {
    return (
      <div>
        <img src={monster} height="600vh" />
        <img src={wheel} height="600vh" />
        <br />
        <button
          onClick={() => {
            spin();
            setSpun(true);
          }}
        >
          <p style={{ fontSize: "large" }}>SPIN!</p>
        </button>
        <br />
        {prize}
        <br />
        <button
          onClick={() => {
            setPlanet("grassland");
          }}
        >
          Back
        </button>
      </div>
    );
  }
  if (planet === "eye") {
    return (
      <div>
        <img src={eye} height="750vh" />
        <br />
        <button
          onClick={() => {
            setPlanet("universe");
          }}
        >
          Back
        </button>
      </div>
    );
  }
  if (planet === "volcano") {
    return (
      <div>
        <img src={volcano} height="600vh" />
        <br />
        <br />
        Hungry citizens pray under the volcano... Some say their hungry is
        sated...
        <br />
        <br />
        <button
          onClick={() => {
            rollVolc();
            setVolc(true);
          }}
        >
          <p style={{ fontSize: "large" }}>Pray</p>
        </button>
        <br />
        <br />
        {food}
        <br />
        <br />
        <button
          onClick={() => {
            setPlanet("lavaland");
          }}
        >
          Back
        </button>
      </div>
    );
  }
}

export default World;
