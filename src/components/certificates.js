import React from "react"


import { Container , Title } from "./common"
import FullStack from "../assets/image/Fullstack.png"
import IPTCertificate from "../assets/image/IPTCertificate.png"
import JSCertificate from "../assets/image/JSCertificate.png"

import "./certificates.css"

const Certificate = () => {
    return (
      <div id="certificate" className="certificate-area">
          <Container>
          <Title side="right" title="Certificate" />
          <div className="certificate">
              <div className="certificate-image">
              <img alt="fullstack" src={FullStack} />
              </div>
              {/* <div className="certificate-image">
              <img alt="IPTC" src={IPTCertificate} />
              </div> */}
              <div className="certificate-image">
              <img alt="JS" src={JSCertificate} />
              </div>

          </div>


          </Container>

      </div>
)
}

export {Certificate}
        
         
         
