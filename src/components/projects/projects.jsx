import React, { Fragment } from "react"
import { StyledLHead } from "../../shared/ui/components"
// import { Link as ReactLink } from "react-router-dom"

import blackjack from "../../images/projects/blackjack.png"
import burger from "../../images/projects/burger-builder.png"
import contactKeeper from "../../images/projects/contact-keeper.png"
import githubFinder from "../../images/projects/github-finder.png"
import itLogger from "../../images/projects/it-logger.png"
import profikom from "../../images/projects/profikom.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faIdCard } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  StyledCardLinks,
  StyledProjectCard,
  StyledProjects,
} from "./components"

const Projects = () => {
  return (
    <Fragment>
      <StyledLHead id="Projects">Projects</StyledLHead>
      <StyledProjects>
        <StyledProjectCard>
          <h3>Contact Keeper</h3>
          <img src={contactKeeper} alt="Contact Keeper" id="left" />
          <StyledCardLinks>
            {/*<ReactLink*/}
            {/*  to="/projects/contact-keeper"*/}
            {/*  title="See More..."*/}
            {/*  id="more"*/}
            {/*>*/}
            {/*  <FontAwesomeIcon icon={faIdCard} />*/}
            {/*</ReactLink>*/}
            <a
              href="https://vast-journey-34926.herokuapp.com/"
              title="See Demo ..."
              id="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDesktop} />
            </a>
            <a
              href="https://github.com/samnite/Contact-Keeper-TS"
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </StyledCardLinks>
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>GitHub Finder</h3>
          <img src={githubFinder} alt="GitHub Finder" id="top" />
          <StyledCardLinks>
            {/*<ReactLink*/}
            {/*  to="/projects/github-finder"*/}
            {/*  title="See More..."*/}
            {/*  id="more"*/}
            {/*>*/}
            {/*  <FontAwesomeIcon icon={faIdCard} />*/}
            {/*</ReactLink>*/}
            <a
              href="https://github-finder-react-ts.netlify.com/"
              title="See Demo ..."
              id="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDesktop} />
            </a>
            <a
              href="https://github.com/samnite/ReactJS-GitHub-Finder-TypeScript"
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </StyledCardLinks>
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>Burger Builder</h3>
          <img src={burger} alt="Burger Builder" id="right" />
          <StyledCardLinks>
            {/*<ReactLink*/}
            {/*  to="/projects/burger-builder"*/}
            {/*  title="See More..."*/}
            {/*  id="more"*/}
            {/*>*/}
            {/*  <FontAwesomeIcon icon={faIdCard} />*/}
            {/*</ReactLink>*/}
            <a
              href="https://burger.profikom.pp.ua/"
              title="See Demo ..."
              id="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDesktop} />
            </a>
            <a
              href="https://github.com/samnite/Burger-Builder-React.JS"
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </StyledCardLinks>
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>BlackJack Game</h3>
          <img src={blackjack} alt="BlackJack" id="left" />
          <StyledCardLinks>
            {/*<ReactLink*/}
            {/*  to="/projects/blackjack-game"*/}
            {/*  title="See More..."*/}
            {/*  id="more"*/}
            {/*>*/}
            {/*  <FontAwesomeIcon icon={faIdCard} />*/}
            {/*</ReactLink>*/}
            <a
              href="https://gifted-pike-a9b5e0.netlify.com/"
              title="See Demo ..."
              id="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDesktop} />
            </a>
            <a
              href="https://github.com/samnite/BlackJack-React.js-"
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </StyledCardLinks>
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>It Logger</h3>
          {/*  This image resized manually in StyledProjectCard nth-child(5) */}
          <img src={itLogger} alt="IT Logger" id="top" />
          <StyledCardLinks>
            {/*<ReactLink to="/projects/it-logger" title="See More..." id="more">*/}
            {/*  <FontAwesomeIcon icon={faIdCard} />*/}
            {/*</ReactLink>*/}

            <a
              href="https://github.com/samnite/IT-Logger-React-Redux"
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </StyledCardLinks>
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>Profikom site</h3>
          <img src={profikom} alt="Profikom" id="right" />
          <StyledCardLinks>
            {/*<ReactLink to="/projects/profikom" title="See More..." id="more">*/}
            {/*  <FontAwesomeIcon icon={faIdCard} />*/}
            {/*</ReactLink>*/}
            <a
              href="https://dev-profikom-portfolio.pantheonsite.io/"
              title="See Demo ..."
              id="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDesktop} />
            </a>
          </StyledCardLinks>
        </StyledProjectCard>
      </StyledProjects>
    </Fragment>
  )
}

export default Projects
