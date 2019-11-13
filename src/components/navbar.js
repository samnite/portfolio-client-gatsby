import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const StyledNavbar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  color: #fff;
  background: var(--dark-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  align-items: center;

  span {
    color: var(--primary-hover-color) !important;
  }

  ul {
    display: flex;
    list-style: none;
    li {
      a {
        cursor: pointer;
        text-decoration: none;
        border: #fff;
        color: #ccc;
        transition: all 0.5s;
        padding: 0.75rem 0.5rem;
        margin: 0 0.25rem;
        border-radius: 5px;

        &:hover {
          background: var(--primary-color);
        }
      }
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    ul {
      margin-top: 0.5rem;
    }
  }
`

const Navbar = () => (
  <Fragment>
    <StyledNavbar>
      <h1>
        <span>Alex</span>Gribenchenko
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="#Projects">Projects</Link>
        </li>
        <li>
          <a
            href="https://github.com/samnite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
      </ul>
    </StyledNavbar>
  </Fragment>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
