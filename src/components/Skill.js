import React, { useState } from "react"

import { Container, Title } from "./common"

import { skills } from "../data/skills"

import "./skill.css"

const Skill = () => {
  const skillsName = Object.keys(skills)
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0])
  const selectedSkills = skills[selectedSkill]
  return (
    <div id="skill" className="skill-area">
      <Container>
        <Title title="My Skills" />
        <div className="skills">
          <ul className="skill-nav">
            {skillsName.map(name => (
              <li
                onClick={() => setSelectedSkill(name)}
                className={name === selectedSkill ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="skill">
            {selectedSkills.map(({ name }) => (
              <div key={name} className="card">
                <h4>{name}</h4>
                <div style={{ width: "100%" }} className="progress-ar" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Skill }