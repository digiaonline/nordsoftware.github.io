import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {

    return (
      <header>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <a
              href={ "http://nordsoftware.com/en/" }
              className={ styles.link }
            >
              <img src="/assets/nordlogo.svg" />
              <p>Nord Software</p>
            </a>
          </div>
          <div className={ styles.navPart2 }>
              <a
                href={ "https://github.com/nordsoftware/" }
                className={ styles.link }
              >
                <img src="/assets/github.svg" />
              </a>
              <a
                href={ "https://twitter.com/nordsoftware" }
                className={ styles.link }
              >
                <img src="/assets/twitter.svg" />
              </a>
          </div>
        </nav>
      </header>
    )
  }
}
