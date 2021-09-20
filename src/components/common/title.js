import React from "react"
import {
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Amarparihar"
            >
              <FaGithub />
            </a>
          </li>
          
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/amar-parihar-85b223193/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=917218867376"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/intent/tweet?url=https://twitter.com/AmarPariharRaj1"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}