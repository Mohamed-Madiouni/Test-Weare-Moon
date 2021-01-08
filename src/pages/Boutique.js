import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../actions/productaction";
import "../style/boutique.css";
function Boutique() {
  const [collapse, setCollapse] = useState(false);
  const [selection, setSelection] = useState(1);
  const [categorie, setCategorie] = useState(1);

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) setCollapse(true);
      else setCollapse(false);
    });
  });
  useEffect(() => {
    if (window.innerWidth > 991) {
      setCollapse(true);
    }
  }, []);
  return (
    <>
      <div className="boutique-welcome">
        <div>
          <p>Nos Produits</p>
          <div>
            <Link to="/">Accueil</Link>
            <i className="fas fa-chevron-right"></i>
            <Link to="/boutique">Boutique</Link>
          </div>
        </div>
      </div>
      <div className="categorie">
        <div>
          <div>
            <h2 onClick={() => setCollapse(!collapse)}>
              CATÉGORIES
              <i className="fas fa-plus"></i>
            </h2>
            <div style={{ display: collapse ? "block" : "none" }}>
              <p
                onClick={() => {
                  setSelection(1);
                }}
                style={{
                  color: selection === 1 && "#F7F7F7",
                  fontSize: selection === 1 && 17,
                  background: selection === 1 && "#7DAF3F",
                }}
              >
                Lame Bois
                <i
                  className="fas fa-chevron-right"
                  style={{
                    color: selection === 1 && "#F7F7F7",
                    display: selection === 1 ? "block" : "none",
                  }}
                ></i>
              </p>
              <p
                onClick={() => setSelection(2)}
                style={{
                  color: selection === 2 && "#F7F7F7",
                  fontSize: selection === 2 && 17,
                  background: selection === 2 && "#7DAF3F",
                }}
              >
                Lame Composite{" "}
                <i
                  className="fas fa-chevron-right"
                  style={{
                    color: selection === 2 && "#F7F7F7",
                    display: selection === 2 ? "block" : "none",
                  }}
                ></i>
              </p>
              <p
                onClick={() => setSelection(3)}
                style={{
                  color: selection === 3 && "#F7F7F7",
                  fontSize: selection === 3 && 17,
                  background: selection === 3 && "#7DAF3F",
                }}
              >
                Panneau Bois{" "}
                <i
                  className="fas fa-chevron-right"
                  style={{
                    color: selection === 3 && "#F7F7F7",
                    display: selection === 3 ? "block" : "none",
                  }}
                ></i>
              </p>
              <p
                onClick={() => setSelection(4)}
                style={{
                  color: selection === 4 && "#F7F7F7",
                  fontSize: selection === 4 && 17,
                  background: selection === 4 && "#7DAF3F",
                }}
              >
                Grille Rigide{" "}
                <i
                  className="fas fa-chevron-right"
                  style={{
                    color: selection === 4 && "#F7F7F7",
                    display: selection === 4 ? "block" : "none",
                  }}
                ></i>
              </p>
              <p
                onClick={() => setSelection(5)}
                style={{
                  color: selection === 5 && "#F7F7F7",
                  fontSize: selection === 5 && 17,
                  background: selection === 5 && "#7DAF3F",
                }}
              >
                Gabion{" "}
                <i
                  className="fas fa-chevron-right"
                  style={{
                    color: selection === 5 && "#F7F7F7",
                    display: selection === 5 ? "block" : "none",
                  }}
                ></i>
              </p>
            </div>
          </div>
          <div>
            <img src="/sources/toolbox.png" alt="toolbox" />
            <h1>Configurez votre espace</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidu.
            </p>

            <img src="/sources/E-3.png" alt="E" />
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className="categorie-map">
          <div>
            <p
              onClick={() => setCategorie(1)}
              style={{
                color: categorie === 1 && "#1F1F1F",
                fontWeight: categorie === 1 && "bold",
              }}
            >
              Nouveautés
            </p>
            <p
              onClick={() => setCategorie(2)}
              style={{
                color: categorie === 2 && "#1F1F1F",
                fontWeight: categorie === 2 && "bold",
              }}
            >
              Populaire
            </p>
            <p
              onClick={() => setCategorie(3)}
              style={{
                color: categorie === 3 && "#1F1F1F",
                fontWeight: categorie === 3 && "bold",
              }}
            >
              Meilleures Ventes
            </p>
          </div>
          <div>
              
            {/* Redux version */}
            {/* {
    products&&products.slice(0)
    .reverse()
    .map((el) => {
      return (
<div onClick={()=>history.push(`/boutique/${el.id}`)}>
                {el.state!=="disponible"&&<p>SUR COMMANDE</p>}
              <img src={el.image} alt="cat-img" />
              <div>
                <p>{el.description}</p>
                <p>{el.prix}</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>

      )})
} */}
            {/* Redux version */}

            <div>
              <p>SUR COMMANDE</p>
              <img src="/sources/cat-img.png" alt="cat-img" />
              <div>
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p>39,89 € ML</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>
            <div>
              <img src="/sources/cat-img.png" alt="cat-img" />
              <div>
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p>39,89 € ML</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>
            <div>
              <img src="/sources/cat-img.png" alt="cat-img" />
              <div>
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p>39,89 € ML</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>
            <div>
              <img src="/sources/cat-img.png" alt="cat-img" />
              <div>
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p>39,89 € ML</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>
            <div>
              <img src="/sources/cat-img.png" alt="cat-img" />
              <div>
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p>39,89 € ML</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>
            <div>
              <img src="/sources/cat-img.png" alt="cat-img" />
              <div>
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p>39,89 € ML</p>
                <p>
                  Voir détails <i className="fas fa-arrow-right"></i>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>Afficher plus</div>
      </div>
    </>
  );
}

export default Boutique;
