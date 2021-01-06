import React from "react";
import { useHistory } from "react-router-dom";
import "../style/home.css";

function Home() {
    const history =useHistory()
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
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="252" height="219" viewBox="0 0 252 219">
  <defs>
    <linearGradient id="linear-gradient" x1="0.462" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#4d302b"/>
      <stop offset="1" stopColor="#653d36"/>
    </linearGradient>
    <clipPath id="clip-path">
      <rect id="Rectangle_44" data-name="Rectangle 44" width="252" height="219" transform="translate(-0.346 -0.373)" fill="url(#linear-gradient)"/>
    </clipPath>
  </defs>
  <g id="Groupe_de_masques_2" data-name="Groupe de masques 2" transform="translate(0.346 0.373)" clipPath="url(#clip-path)">
    <g id="Groupe_23" data-name="Groupe 23" transform="translate(-52.278 40.495) rotate(-16)">
      <path id="Tracé_58" data-name="Tracé 58" d="M129.759,35.068,129.586.641,0,0,.173,34.428l129.586.641Z" transform="translate(0.002 0)" fill="#7daf3f"/>
      <path id="Tracé_59" data-name="Tracé 59" d="M129.978,78.23l-92.141-.455-.227-45.1,92.141.455L129.588.641,62.084.307h0L0,0,.563,112.02l129.588.641Z" transform="translate(0.392 78.073)" fill="#7daf3f"/>
    </g>
  </g>
</svg>
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
              <i className="fas fa-arrow-left"></i>
              <i className="fas fa-arrow-right"></i>
              </div>
          </div>

      </div>
    </>
  );
}

export default Home;
