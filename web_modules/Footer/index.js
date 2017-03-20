import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <footer className={ styles.footer }>
      </footer>
    )
  }
}
