import React, { Fragment } from "react"
import "./layout.css"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSkype,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;
  background: #333;
  color: #ccc;
  div {
    margin: 0 4rem;
  }
  p {
    margin-top: 0.5rem;
  }
  a {
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    color: #ccc;
    transition: all 1s;
    &:hover {
      background: var(--primary-color);
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    p {
      border-bottom: 1px dotted #444;
      margin: 0;
    }
  }
`

const StyledCopy = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #333;
  font-size: 0.9rem;
  color: #777;
  text-align: center;
  justify-content: center;
  padding-bottom: 0.5rem;
  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`

const Footer = props => {
  return (
    <Fragment>
      <StyledFooter>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#93cb52" />
          <p>
            <a href="mailto:samnite87@gmail.com">Mail Me</a>
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faSkype} size="2x" color="#93cb52" />
          <p>
            <a
              href="https://join.skype.com/invite/eNxfykF1nU9F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call Me
            </a>
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTelegram} size="2x" color="#93cb52" />
          <p>
            <a
              href="https://t.me/samnite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram Me
            </a>
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} size="2x" color="#93cb52" />
          <p>
            <a
              href="https://www.facebook.com/samnite87"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alex Gribenchenko
            </a>
          </p>
        </div>
      </StyledFooter>
      <StyledCopy>
        Copyright &copy; {new Date().getFullYear()} Alex Gribenchenko. All
        Rights Reserved
      </StyledCopy>
    </Fragment>
  )
}

export default Footer
