import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { MDBCollapse } from "mdbreact";
import { MDBIcon } from "mdbreact";
import "../style/navbar.css";
function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const [drop, setDrop] = useState({ valeur: 0 });
  const [size, setSize] = useState(false);
  const [clk, setClk] = useState(false);
  const [search, setSearch] = useState(false);
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
  }, []);

  return (
    <>
      {size ? (
        <div className="navb-small">
          <div
            style={{
              margin: 0,
            }}
            className="nav-mobile"
          >
            <div className="first-small">
              <Link to="/">
                <img src="/sources/logo.svg" alt="Mon exterieur" />
              </Link>
            </div>
            <div>
              <i
                className="fas fa-search"
                onClick={() => setSearch(!search)}
              ></i>
            </div>
            <div>
              <MDBIcon
                icon={clk ? "times" : "align-justify"}
                onClick={() => setClk(!clk)}
              />
            </div>
            {search && (
              <div className="search-nav">
                <input type="text" placeholder="Recherche" autoFocus />
              </div>
            )}

            {clk && (
              <div className="drop">
                <ul className="ul_drop">
                  <li>
                    <Link to="/">
                      {" "}
                      <span>Accueil</span>
                    </Link>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        if (location.pathname === "/boutique") {
                          toggleCollapse("basicCollapse");
                          setColNum(collapseID && colNum === 1 ? 0 : 1);
                        }
                        history.push("/boutique");
                      }}
                    >
                      Boutique{" "}
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
                        className="collapse-ul"
                      >
                        <li>
                          <Link
                            to="/"
                            style={{
                              fontSize: 15,
                              color: "#4D302B",
                            }}
                          >
                            Lame commposite
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{
                              fontSize: 15,
                              color: "#4D302B",
                            }}
                          >
                            Lame en bois
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{
                              fontSize: 15,
                              color: "#4D302B",
                            }}
                          >
                            Panneau bois
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{
                              fontSize: 15,
                              color: "#4D302B",
                            }}
                          >
                            Grille rigide
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{
                              fontSize: 15,
                              color: "#4D302B",
                            }}
                          >
                            Gabion
                          </Link>
                        </li>
                      </ul>
                    </MDBCollapse>
                  </li>
                  <li>
                    <Link to="/">
                      <span>Nos réalisations</span>{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <span>Contactez-nous</span>{" "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/">
                      <span>Configurateur</span>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>Notre magasin</span>{" "}
                    </Link>
                  </li> */}
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
                  style={{ width: 168, height: 20 }}
                />
              </Link>
            </div>
            <div className=" second">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Recherche" />
            </div>
            <div onClick={()=>history.push("/")}>
              <img src="/sources/mark.svg" alt="mark" />
              <span>Notre magasin</span>
            </div>
            <div onClick={()=>history.push("/")}>
              <img src="/sources/fence.svg" alt="fence" />
              <span>Configurateur</span>
            </div>
            <div></div>
          </div>
          <div>
            <div onClick={()=>history.push("/")}>
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
            <div onClick={()=>history.push("/")}>
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
