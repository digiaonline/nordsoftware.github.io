import React, { Component, PropTypes } from "react"
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
            <a
              href={ "http://nordsoftware.com/" }
              className={ styles.link }
            >
              <img src="assets/nordlogo.svg" />
            </a>
          </div>
          <div className={ styles.navPart2 }>
              <a
                href={ "http://nordsoftware.com/en/about-us/" }
                className={ styles.link }
              >
                  { "About us" }
              </a>
              <a
                href={ "http://nordsoftware.com/en/blog/" }
                className={ styles.link }
              >
                  { "Blog" }
              </a>
          </div>
        </nav>
      </header>
    )
  }
}
