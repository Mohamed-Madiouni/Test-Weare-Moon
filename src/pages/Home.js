import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/home.css";

function Home() {
    const history =useHistory()
    const [realisation,setRealisation]=useState(1)
  return (
    <>
      <div
        className="home-welcome"
        style={{ background: "url(/sources/home_welcome.png)" }}
      ></div>
      <div className="home-map">
        <div style={{ background: "url(/sources/home-map-1.svg)" }} onClick={()=>history.push("/")}>
          <p>Lame <br/> commposite</p>
        </div>
        <div style={{ background: "url(/sources/home-map-2.svg)" }} onClick={()=>history.push("/")}>
          <p>Lame <br/> en bois</p>
        </div>
        <div style={{ background: "url(/sources/home-map-3.svg)" }} onClick={()=>history.push("/")}>
          <p>Panneau <br/> bois</p>
        </div>
        <div style={{ background: "url(/sources/home-map-4.svg)" }} onClick={()=>history.push("/")}>
          <p>Grille <br/> rigide</p>
        </div>
        <div style={{ background: "url(/sources/home-map-5.svg)" }} onClick={()=>history.push("/")}>
          <p>Gabion</p>
        </div>
      </div>
      <div className="config">
          <div>
              <img src="/sources/fence.svg" alt="fence"/>
          </div>
          <div>
              <h3>
              Configurez votre espace
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu.
              </p>
          </div>
          <div>
          <i className="fas fa-arrow-right"></i>
          </div>
<img src="/sources/E.png" alt="" className="img-green"/>
<img src="/sources/E-2.png" alt="" className="img-brown"/>

      </div>
      <div className="realisation">
          <div>
              <h2>
              Nos realisations
              </h2>
          </div>
          <div >
              <img src="/sources/realisations.png" alt=""/>
              
              <img src="/sources/E.svg" alt="E"/>
              
          </div>
          <div>
             <h3>
              Panneau bois
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
              </p>
              <div>
              <i className="fas fa-arrow-left" ></i>
              <i className="fas fa-arrow-right" ></i>
              </div>
              <div>
              <i className="fas fa-arrow-left"   onClick={()=>realisation===1?setRealisation(3):setRealisation(realisation-1)}></i>
              <div className="dots-home">
                <div style={{backgroundColor:realisation!==1&&"#FFFFFF"}}></div>
                <div style={{backgroundColor:realisation!==2&&"#FFFFFF"}}></div>
                <div style={{backgroundColor:realisation!==3&&"#FFFFFF"}}></div>
              </div>
              <i className="fas fa-arrow-right" onClick={()=>realisation===3?setRealisation(1):setRealisation(realisation+1)}></i>
              </div>
          </div>

      </div>
      <div className="notice">
        <div>
          <h2>Notice <br/> & Installation</h2>
          <p>
          Avant de commencer, calculez la quantité de bois, de béton et de quincaillerie dont vous aurez besoin.
          </p>
          <div>
            <span> EN SAVOIR PLUS</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div>
        <div style={{background:"url(/sources/notice-1.png)"}}>
        <img src="/sources/E.svg" alt="E"/>
        </div>
        </div>
        <div>
        <div style={{background:"url(/sources/notice-2.png)"}}>
        <img src="/sources/E.svg" alt="E"/>
        </div>
        </div>
        <div>
        <div style={{background:"url(/sources/notice-3.png)"}}>
        <img src="/sources/E.svg" alt="E"/>
        </div>
        </div>
        <div>
        <div style={{background:"url(/sources/notice-4.png)"}}>
        <img src="/sources/E.svg" alt="E"/>
        </div>
        </div>
        <div>
        <div style={{background:"url(/sources/notice-5.png)"}}>
        <img src="/sources/E.svg" alt="E"/>
        </div>
        </div>

      </div>
    </>
  );
}

export default Home;
