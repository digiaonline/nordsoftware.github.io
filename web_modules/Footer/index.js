import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
import Svg from "react-svg-inline"
import facebookSvg from "../icons/iconmonstr-facebook-4.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import linkedInSvg from "../icons/iconmonstr-linkedin-5.svg"
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
      { pkg.facebook &&
          <a
            href={ `https://facebook.com/${pkg.facebook}` }
            className={ styles.link }
          >
            <Svg svg={ facebookSvg } />
          </a>
        }
        { pkg.repository &&
          <a
            href={ `https://github.com/${pkg.repository}` }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } />
          </a>
        }
        { pkg.linkedin &&
          <a
            href={ `https://linkedin.com/company/${pkg.linkedin}` }
            className={ styles.link }
          >
            <Svg svg={ linkedInSvg } />
          </a>
        }
      </footer>
    )
  }
}
