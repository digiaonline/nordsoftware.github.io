import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <footer className={ styles.footer }>
        <a
          href={ "http://nordsoftware.com/en/" }
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
      </footer>
    )
  }
}
