import React, { Component, PropTypes } from "react"
import { Link } from "react-router"
import styles from "./index.scss"
export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {

    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              <img src="assets/nordlogo.svg" />
            </Link>
          </div>
          <div className={ styles.navPart2 }>
              <a
                href={ "http://nordsoftware.com/about-us/" }
                className={ styles.link }
              >
                  { "ABOUT US" }
              </a>
              <Link className={ styles.link } to="/blogs">
                  { "OUR BlOG" }
              </Link>
          </div>
        </nav>
      </header>
    )
  }
}
