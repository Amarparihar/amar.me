import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know. Or you can just 'say hi' to me.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amarparihar1359@gmail.com"
                target="_blank"
              rel="noopener noreferrer"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                  amarparihar1359@gmail.com <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>Whatsapp</h5>
                <p>
                  (+91 7218867376) 
                </p>
              </li>
              <li>
                <h5>Twitter</h5>
                <p>
                
            FacTwitter - @AmarPariharRaj1 
                </p>
              </li>
              
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }