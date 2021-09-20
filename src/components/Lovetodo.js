import React from "react"

import { Container, Title } from "./common"

import listen from "../assets/image/listen.png"
import travelling from "../assets/image/travelling.png"
import cricket from "../assets/image/cricket.png"
import swimming from "../assets/image/swimming.png"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={listen} />
            <h4>Listening Musics</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={travelling} />
            <h4>Travelling</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={cricket} />
            <h4>Playing Cricket</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={swimming} />
            <h4>Swimming</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }