import React from "react";
import { useHistory } from "react-router-dom";
import "../style/homePres.css";
function HomePres({ data }) {
    const history = useHistory()
  return (
    <div className="home-map">
      {data.map((el, id) => {
        return (
          <div
            key={id}
            style={{ background: `url(${el.img})` }}
            onClick={() => history.push("/")}
          >
            <p>
              {el.firstTitre} <br /> {el.secondeTitre}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HomePres;
