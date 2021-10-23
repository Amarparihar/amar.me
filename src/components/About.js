import React from "react"

import { Container, Title, Button } from "./common"

import profilepic from "../assets/image/profilepic.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Amar Parihar, a passionate Full Stack Developer. I
              develop web applications and mobile applications. My core skill is 
              based on JavaScript and I love to do most of the things using JavaScript.
               I love to make the web more open to the world. I have graduated with a bachelor's degree
              in Information Technology from Sant Gadge Baba Amravati University at
              Maharashtra, India in 2020. I am available for any kind of job
              opportunity that suits my interests.
            </p>
            <div className="about-action">
              <Button
                link="https://drive.google.com/file/d/15QDeUk5wh8eXvJ5bsDTlG5wXU2nCg_Vu/view?usp=sharing"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profilepic} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }