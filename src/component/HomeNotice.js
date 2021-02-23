import React from 'react'
import { useHistory } from 'react-router-dom'
import "../style/homeNotice.css"
function HomeNotice() {
    const history = useHistory()
    return (
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
    )
}

export default HomeNotice
