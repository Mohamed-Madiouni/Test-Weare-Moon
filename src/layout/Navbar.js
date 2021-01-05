import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { MDBCollapse } from "mdbreact";
import { MDBIcon } from "mdbreact";
import "../style/navbar.css";
function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const [drop, setDrop] = useState({ valeur: 0 });
  const [under, setUnder] = useState(0);
  const [size, setSize] = useState(false);
  const [clk, setClk] = useState(false);
  const [collapseID, setCollapseID] = useState("");
  const [colNum, setColNum] = useState(0);
  const [contactData, setContactData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const onChange = (e) => {
    setContactData({ ...contactData, [e.target.id]: e.target.value });
  };
  const toggleCollapse = (collapse) => {
    setCollapseID(collapse !== collapseID ? collapse : "");
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       setInfo(false);
  //     } else {
  //       setInfo(true);
  //     }
  //   });
  // });
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 991) {
        setSize(true);
      } else {
        setSize(false);
      }
    });
  });

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setSize(true);
    }
    // if (window.scrollY > 0) {
    //   setInfo(false);
    // }
  }, []);

  return (
    <>
      {size ? (
        <div className="navb">
          <div
            className="row "
            style={{
              height: !clk && 65,
              transition: "all 0s",
              margin: 0,
              width: "100%",
              background: "#F0EEEB",
            }}
          >
            <div
              className="col-8 pad"
              style={{
                height: 65,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Link to="/">
                <img
                  src="/sources/vibtic.png"
                  alt="vibtic"
                  className="img_vib"
                  style={{ width: 110, height: 30 }}
                />
              </Link>
            </div>
            <div
              className="col-3"
              style={{
                height: 65,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: 25,
              }}
            >
              <MDBIcon
                icon={clk ? "times" : "align-justify"}
                className="black-text"
                onClick={() => setClk(!clk)}
              />
            </div>

            {clk && (
              <div
                className="col-8 pad"
                style={{ marginBottom: 15, lineHeight: "23px" }}
              >
                <ul
                  className="ul_drop"
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    color: "white",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  <li>
                    <Link to="/">
                      {" "}
                      <span
                        style={{
                          color: location.pathname === "/" && "#E73528",
                        }}
                      >
                        Accueil
                      </span>
                    </Link>

                    {/* <ul style={{listStyleType:"none",paddingLeft:10,margin:0}}>
                 <li>
                  VIBTIC
              </li>
              <li>
                 compétences & expertise
              </li>
              <li>
                 implantation
              </li>
              <li>
                  nos valeurs et nos engagements
              </li>
              <li>
                  références
              </li>
                 </ul> */}
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        toggleCollapse("basicCollapse");
                        setColNum(collapseID && colNum === 1 ? 0 : 1);
                      }}
                      style={{
                        color:
                          (location.pathname === "/systeme" ||
                            location.pathname === "/reseau" ||
                            location.pathname === "/web" ||
                            location.pathname === "/projet") &&
                          "#E73528",
                      }}
                    >
                      Services{" "}
                    </span>
                    <MDBCollapse
                      id="basicCollapse"
                      isOpen={colNum === 1 && collapseID}
                    >
                      <ul
                        style={{
                          listStyleType: "none",
                          paddingLeft: 10,
                          margin: 0,
                        }}
                      >
                        <li>
                          <Link
                            to="/systeme"
                            style={{
                              fontSize: 15,
                              color:
                                location.pathname === "/systeme"
                                  ? "#E73528"
                                  : "black",
                            }}
                          >
                            systéme d'information
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/reseau"
                            style={{
                              fontSize: 15,
                              color:
                                location.pathname === "/reseau"
                                  ? "#E73528"
                                  : "black",
                            }}
                          >
                            réseaux & sécurité
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/web"
                            style={{
                              fontSize: 15,
                              color:
                                location.pathname === "/web"
                                  ? "#E73528"
                                  : "black",
                            }}
                          >
                            application web
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/projet"
                            style={{
                              fontSize: 15,
                              color:
                                location.pathname === "/projet"
                                  ? "#E73528"
                                  : "black",
                            }}
                          >
                            gestion du projet
                          </Link>
                        </li>
                      </ul>
                    </MDBCollapse>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        toggleCollapse("basicCollapse");
                        setColNum(collapseID && colNum === 2 ? 0 : 2);
                      }}
                      style={{
                        color:
                          (location.pathname === "/candidature" ||
                            location.pathname === "/offres") &&
                          "#E73528",
                      }}
                    >
                      Carrière
                    </span>
                    <MDBCollapse
                      id="basicCollapse"
                      isOpen={colNum === 2 && collapseID}
                    >
                      <ul
                        style={{
                          listStyleType: "none",
                          paddingLeft: 10,
                          margin: 0,
                        }}
                      >
                        <li>
                          <Link
                            to="/offres"
                            style={{
                              fontSize: 15,
                              color:
                                location.pathname === "/offres"
                                  ? "#E73528"
                                  : "black",
                            }}
                          >
                            nos offres d'emploi
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/candidature"
                            style={{
                              fontSize: 15,
                              color:
                                location.pathname === "/candidature"
                                  ? "#E73528"
                                  : "black",
                            }}
                          >
                            candidature spontanée
                          </Link>
                        </li>
                      </ul>
                    </MDBCollapse>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span
                        style={{
                          color: location.pathname === "/contact" && "#E73528",
                        }}
                      >
                        Contact
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="navb">
          <div>
            <div
              className="first"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #E2E2E2",
              }}
            >
              <Link to="/">
                <img
                  src="/sources/logo.svg"
                  alt="Mon exterieur"
                  style={{ width: 168, height: 20, transition: "width 0.5s" }}
                />
              </Link>
            </div>
            <div className=" second">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Recherche" />
              {/* <div
                className="drop"
                style={{
                  position: "relative",
                  textDecoration: under === 1 && "underline",
                }}
              >
                <Link
                  to="/"
                  onMouseEnter={() => {
                    setDrop({ ...drop, valeur: 1 });
                  }}
                  onClick={() => {
                    setDrop({ ...drop, valeur: 1 });
                  }}
                  style={{ color: location.pathname === "/" && "#E73528" }}
                >
                  Accueil
                
                </Link>
               
              </div>
              <div
                className="drop"
                style={{
                  position: "relative",
                  textDecoration: under === 2 && "underline",
                }}
              >
                <span
                  onMouseEnter={() => {
                    setDrop({ ...drop, valeur: 2 });
                  }}
                  onClick={() => {
                    setDrop({ ...drop, valeur: 2 });
                  }}
                  style={{
                    color:
                      (location.pathname === "/systeme" ||
                        location.pathname === "/reseau" ||
                        location.pathname === "/web" ||
                        location.pathname === "/projet") &&
                      "#E73528",
                  }}
                >
                  Services
                  <MDBIcon icon="angle-down" />
                </span>
                {drop.valeur === 2 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 45,
                      right: 0,
                      width: "max-content",
                    }}
                    onMouseLeave={() => {
                      setDrop({ ...drop, valeur: 0 });
                      setUnder(0);
                    }}
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      <li>
                        <Link
                          to="/systeme"
                          style={{
                            fontSize: 14,
                            color:
                              location.pathname === "/systeme" && "#E73528",
                          }}
                        >
                         systéme d'information
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/reseau"
                          style={{
                            fontSize: 14,
                            color: location.pathname === "/reseau" && "#E73528",
                          }}
                        >
                         réseaux & sécurité
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/web"
                          style={{
                            fontSize: 14,
                            color: location.pathname === "/web" && "#E73528",
                          }}
                        >
                          application web
                        </Link>
                      </li>
                      <li style={{ border: "none" }}>
                        <Link
                          to="/projet"
                          style={{
                            fontSize: 14,
                            color: location.pathname === "/projet" && "#E73528",
                          }}
                        >
                          gestion du projet
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="drop"
                style={{
                  position: "relative",
                  textDecoration: under === 3 && "underline",
                }}
              >
                <span
                  onMouseEnter={() => {
                    setDrop({ ...drop, valeur: 3 });
                  }}
                  onClick={() => {
                    setDrop({ ...drop, valeur: 3 });
                  }}
                  style={{
                    color:
                      (location.pathname === "/candidature" ||
                        location.pathname === "/offres") &&
                      "#E73528",
                  }}
                >
                  Carrière
                  <MDBIcon icon="angle-down" />
                </span>
                {drop.valeur === 3 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 45,
                      right: 0,
                      width: "max-content",
                    }}
                    onMouseLeave={() => {
                      setDrop({ ...drop, valeur: 0 });
                      setUnder(0);
                    }}
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                    
                      <li>
                        <Link
                          to="/offres"
                          style={{
                            fontSize: 14,
                            color: location.pathname === "/offres" && "#E73528",
                          }}
                        >
                         nos offres d'emploi
                        </Link>
                      </li>
                      <li style={{ border: "none" }}>
                        <Link
                          to="/candidature"
                          style={{
                            fontSize: 14,
                            color:
                              location.pathname === "/candidature" && "#E73528",
                          }}
                        >
                          candidature spontanée
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div style={{ position: "relative", margin: "0px 16px" }}>
                <Link
                  to="/contact"
                  style={{
                    color: location.pathname === "/contact" && "#E73528",
                  }}
                >
                  Contact
                </Link>
              </div> */}
            </div>
            <div>
              <img src="/sources/mark.svg" alt="mark" />
              <span>Notre magasin</span>
            </div>
            <div>
              <img src="/sources/fence.svg" alt="fence" />
              <span>Configurateur</span>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <span>Accueil</span>
            </div>
            <div
              onMouseEnter={() => {
                setDrop({ ...drop, valeur: 2 });
              }}
              onClick={() => {
                setDrop({ ...drop, valeur: 2 });
              }}
              style={{
                position: "relative",
              }}
            >
              <span>Boutique</span>

              {drop.valeur === 2 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    background: "url(/sources/img_accueil.svg)",
                  }}
                  onMouseLeave={() => {
                    setDrop({ ...drop, valeur: 0 });
                  }}
                  className="drop-list"
                >
                  <ul style={{ listStyleType: "none", margin: 0 }}>
                    <li>
                      <Link to="/">Lame commposite</Link>
                    </li>
                    <li>
                      <Link to="/">Lame en bois</Link>
                    </li>
                    <li>
                      <Link to="/">Panneau bois</Link>
                    </li>
                    <li style={{ border: "none" }}>
                      <Link to="/">Grille rigide</Link>
                    </li>
                    <li style={{ border: "none" }}>
                      <Link to="/">Gabion</Link>
                    </li>
                  </ul>
                  <div onClick={() => history.push("/boutique")}>Boutique</div>
                </div>
              )}
            </div>
            <div>
              <span>Nos réalisations</span>
            </div>
            <div
              onMouseEnter={() => {
                setDrop({ ...drop, valeur: 4 });
              }}
              onClick={() => {
                setDrop({ ...drop, valeur: 4 });
              }}
              style={{
                position: "relative",
              }}
            >
              <span>Contactez-nous</span>
              {drop.valeur === 4 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                  }}
                  onMouseLeave={() => {
                    setDrop({ ...drop, valeur: 0 });
                  }}
                  className="drop-list-contact"
                >
                  <div style={{ background: "url(/sources/img_accueil.svg)" }}>
                    {" "}
                    <p>Coordonnées & Map</p>
                  </div>

                  <div>
                    <p>
                      <b>
                        Hey! Pour toute informations ou suggestions, Merci de
                        remplir le formulaire suivant
                      </b>
                    </p>
                    <form>
                      <input
                        type="text"
                        id="nom"
                        value={contactData.nom}
                        className="form-control mb-2"
                        onChange={onChange}
                        placeholder="Nom & Prénom"
                      />

                      <input
                        type="email"
                        id="email"
                        value={contactData.email}
                        className="form-control mb-2"
                        onChange={onChange}
                        placeholder="E-mail"
                      />

                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control rounded-0"
                          id="message"
                          value={contactData.message}
                          rows="3"
                          onChange={onChange}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div onClick={onSubmit}>Envoyer</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
