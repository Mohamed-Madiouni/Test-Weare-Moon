import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src="/sources/logo.svg" alt="Mon exterieur" />
      </div>
      <div>
        <div>
          <p>Lien Utiles</p>
          <div>
            <Link to="/">Configurateur</Link>
            <Link to="/">Notre magasin</Link>
            <Link to="/">Notice et installation</Link>
            <Link to="/">Livraison Transport</Link>
          </div>
        </div>
        <div>
          <p>Nous contacter</p>
          <div>
            <h5>Adresse :</h5>
            <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
            <h5>Telephone :</h5>
            <p>+33 2 43 57 00 87</p>
          </div>
        </div>
        <div>
          <p>Nous contacter</p>
          <div>
            <p>
              <i className="far fa-clock"></i>7:30 -12:00
            </p>
            <p>
              <i className="far fa-clock"></i>13:30 -18:00
            </p>
            <h5>
              Samedi <br />{" "}
              <span>(Fermé les samedis de janvier et février)</span>
            </h5>
            <p>
              <i className="far fa-clock"></i>9:00 -12:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
