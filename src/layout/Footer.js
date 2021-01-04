import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../style/footer.css";
function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const date = new Date()
  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-4 col-12 footer-section">
          <h4>{t("A propos.1")}</h4>
          <div style={{ border: "none" }}>
            <Link to="/">
              <p>{t("Accueil.1")}</p>
            </Link>
            <Link to="/offres">
              <p>{t("Nos offres.1")}</p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-12 footer-section">
          <h4>{t("Services.1")}</h4>
          <div>
            <Link to="/systeme">
              {" "}
              <p style={{ width: "fit-content" }}>
                {t("systéme d'information.1")}
              </p>
            </Link>
            <Link to="/reseau">
              {" "}
              <p>{t("réseaux & sécurité.1")}</p>
            </Link>
            <Link to="/web">
              <p>{t("application web.1")}</p>
            </Link>
            <Link to="/projet">
              <p>{t("gestion du projet.1")}</p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-12 footer-social" style={{ padding: 0 }}>
          <h4>{t("Réseaux sociaux.1")}</h4>
          <div style={{ paddingTop: 10 }}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/sources/facebook.svg"
                alt="facebook"
                width="35px"
                height="35px"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/sources/linkedin.svg"
                alt="linkedin"
                width="35px"
                height="35px"
              />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <img
                src="/sources/twitter.svg"
                alt="twitter"
                width="40px"
                height="40px"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src="/sources/youtube.svg"
                alt="youtube"
                width="40px"
                height="40px"
              />
            </a>
          </div>
          {/* <div>
    <div style={{position:"relative",width:"50%"}}>
        <input type="text" name="email" id="email" placeholder="Votre email"/>
   
    <span><img src="/send.svg" alt="send" id="send" width="25px" height="25px" style={{marginTop:7,marginRight:7}}/></span>
    </div>
    
</div> */}
          <div>
            <img
              src="/sources/francais-v2.png"
              alt="francais"
              width="43px"
              height="43px"
              title={t("français.1")}
              onClick={() => {
                changeLanguage("fr");
              }}
            />
            <img
              src="/sources/anglais-v2.png"
              alt="anglais"
              width="43px"
              height="43px"
              title={t("anglais.1")}
              onClick={() => {
                changeLanguage("en");
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <p style={{ display: "flex", marginLeft: "3%", fontSize: 13 }}>
          <span style={{ marginRight: 10 }}>
            © Copyright <Link to="/">VIBTIC</Link> {date.getFullYear()}{" "}
          </span>
          |
          <Link to="/contact" style={{ marginLeft: 10 }}>
            {t("Nous contacter.1")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
