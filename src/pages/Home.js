import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HomePres from "../component/HomePres";
import "../style/home.css";

function Home() {
  const data = [
    {
      img: "/sources/home_welcome.png",
      firstTitre: "Lame",
      secondeTitre: "commposite",
    },
    {
      img: "/sources/home-map-2.svg",
      firstTitre: "Lame",
      secondeTitre: "en bois",
    },
    {
      img: "/sources/home-map-3.svg",
      firstTitre: "Panneau",
      secondeTitre: "bois",
    },
    {
      img: "/sources/home-map-4.svg",
      firstTitre: "Grille",
      secondeTitre: "rigide",
    },
    {
      img: "/sources/home-map-5.svg",
      firstTitre: "Gabion",
      secondeTitre: "",
    },
  ];
  const history = useHistory();
  const [realisation, setRealisation] = useState(1);
  return (
    <>
      <div
        className="home-welcome"
        style={{ background: "url(/sources/home_welcome.png)" }}
      ></div>
      <HomePres data={data} />
      <div className="config" onClick={() => history.push("/")}>
        <div>
          <img src="/sources/fence.svg" alt="fence" />
        </div>
        <div>
          <h3>Configurez votre espace</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidu.
          </p>
        </div>
        <div>
          <i className="fas fa-arrow-right"></i>
        </div>
        <img src="/sources/E.png" alt="" className="img-green" />
        <img src="/sources/E-2.png" alt="" className="img-brown" />
      </div>
      <div className="realisation">
        <div>
          <h2>Nos realisations</h2>
        </div>
        <div>
          <img src="/sources/realisations.png" alt="realisation" />

          <img src="/sources/E.svg" alt="E" />
        </div>
        <div>
          <h3>Panneau bois</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et
          </p>
          <div>
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right"></i>
          </div>
          <div>
            <i
              className="fas fa-arrow-left"
              onClick={() =>
                realisation === 1
                  ? setRealisation(3)
                  : setRealisation(realisation - 1)
              }
            ></i>
            <div className="dots-home">
              <div
                style={{ backgroundColor: realisation !== 1 && "#FFFFFF" }}
              ></div>
              <div
                style={{ backgroundColor: realisation !== 2 && "#FFFFFF" }}
              ></div>
              <div
                style={{ backgroundColor: realisation !== 3 && "#FFFFFF" }}
              ></div>
            </div>
            <i
              className="fas fa-arrow-right"
              onClick={() =>
                realisation === 3
                  ? setRealisation(1)
                  : setRealisation(realisation + 1)
              }
            ></i>
          </div>
        </div>
      </div>
      <div className="notice">
        <div onClick={() => history.push("/")}>
          <h2>
            Notice <br /> & Installation
          </h2>
          <p>
            Avant de commencer, calculez la quantité de bois, de béton et de
            quincaillerie dont vous aurez besoin.
          </p>
          <div>
            <span> EN SAVOIR PLUS</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div>
          <div style={{ background: "url(/sources/notice-1.png)" }}>
            <img src="/sources/E.svg" alt="E" />
          </div>
        </div>
        <div>
          <div style={{ background: "url(/sources/notice-2.png)" }}>
            <img src="/sources/E.svg" alt="E" />
          </div>
        </div>
        <div>
          <div style={{ background: "url(/sources/notice-3.png)" }}>
            <img src="/sources/E.svg" alt="E" />
          </div>
        </div>
        <div>
          <div style={{ background: "url(/sources/notice-4.png)" }}>
            <img src="/sources/E.svg" alt="E" />
          </div>
        </div>
        <div>
          <div style={{ background: "url(/sources/notice-5.png)" }}>
            <img src="/sources/E.svg" alt="E" />
          </div>
        </div>
      </div>

      <div className="magasin">
        <div>
          <img src="/sources/magasin.png" alt="magasin" />

          <img src="/sources/E.svg" alt="E" />
        </div>
        <div>
          <h2>Notre magasin</h2>
        </div>
        <div onClick={() => history.push("/")}>
          <img src="/sources/magasin-1.png" alt="work" />
          <p>
            Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr.
          </p>
          <div>
            <span> EN SAVOIR PLUS</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
