import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
import Svg from "react-svg-inline"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import linkedInSvg from "../icons/iconmonstr-linkedin-5.svg"
import twitterSvg from "../icons/iconmonstr-twitter-5.svg"
export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <footer className={ styles.footer }>
        { pkg.github &&
          <a
            href={ `${pkg.github}` }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
          </a>
        }
        { pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
          </a>
        }
        { pkg.linkedin &&
          <a
            href={ `https://linkedin.com/company/${pkg.linkedin}` }
            className={ styles.link }
          >
            <Svg svg={ linkedInSvg } cleanup />
          </a>
        }
      </footer>
    )
  }
}
