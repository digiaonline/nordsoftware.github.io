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
            <div className={ styles.square }>
              <div className="line l third y"></div>
              <div className="line r third y"></div>
              <div className="line t second x"></div>
              <div className="line b second x"></div>
              <div className="line m-l first y"></div>
              <div className="line m-r first y"></div>
            </div>
              <p>nordsoftware</p>
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
